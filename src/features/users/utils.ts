export const formatRepoUrl = (url: string) => {
  return url.replace('/repos', '').replace('api.', '');
};
