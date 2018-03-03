import Home from './Home.vue';
import Search from './search/Search.vue';
import Profile from './Profile.vue';
import FileView from './FileView.vue';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/file',
    name: 'File',
    component: FileView,
  }
];
