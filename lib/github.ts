export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  updated_at: string;
}

export async function getRepos(): Promise<GitHubRepo[]> {
  try {
    // Next.js fetch with next/cache revalidation options to prevent rate-limiting while staying fresh.
    const res = await fetch("https://api.github.com/users/Vignesh130703/repos?sort=updated&per_page=12", {
      next: { revalidate: 3600 } // revalidate every hour
    });

    if (!res.ok) {
      console.error(`GitHub API responded with status: ${res.status}`);
      return [];
    }

    const repos: GitHubRepo[] = await res.json();
    return repos;
  } catch (error) {
    console.error("Failed to fetch GitHub repos", error);
    return [];
  }
}
