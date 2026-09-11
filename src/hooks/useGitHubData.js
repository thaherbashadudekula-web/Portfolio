import { useState, useEffect } from 'react';

/**
 * useGitHubData
 * Fetches real public GitHub data for the configured username.
 * Returns honest status with no fabricated numbers.
 */
export function useGitHubData(username) {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(() => Boolean(username));
  const [error, setError] = useState(null);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    if (!username) {
      return;
    }

    let isMounted = true;

    async function fetchGitHub() {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
        ]);

        if (!profileRes.ok) {
          throw new Error(`GitHub API responded with status ${profileRes.status}`);
        }

        const profileData = await profileRes.json();
        const reposData = reposRes.ok ? await reposRes.json() : [];

        if (isMounted) {
          setProfile({
            login: profileData.login,
            name: profileData.name || profileData.login,
            avatarUrl: profileData.avatar_url,
            bio: profileData.bio,
            publicRepos: profileData.public_repos,
            followers: profileData.followers,
            following: profileData.following,
            createdAt: profileData.created_at,
            htmlUrl: profileData.html_url,
          });

          const formattedRepos = Array.isArray(reposData)
            ? reposData.map((repo) => ({
                id: repo.id,
                name: repo.name,
                description: repo.description || 'No description provided.',
                stars: repo.stargazers_count,
                forks: repo.forks_count,
                language: repo.language || 'Code',
                url: repo.html_url,
                updatedAt: repo.updated_at,
              }))
            : [];

          setRepos(formattedRepos);
          setIsLive(true);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setIsLive(false);
          setLoading(false);
        }
      }
    }

    fetchGitHub();

    return () => {
      isMounted = false;
    };
  }, [username]);

  return { profile, repos, loading, error, isLive };
}
