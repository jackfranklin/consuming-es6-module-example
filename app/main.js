import { getReposForUser } from 'jf-fowa-test2';

getReposForUser('jackfranklin').then((repos) => {
  repos.forEach((repo) => {
    var heading = document.createElement('h1');
    heading.appendChild(document.createTextNode(repo.name));
    document.body.appendChild(heading);
  });
});
