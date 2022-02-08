import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      reviews: [
        {
          id: 'r1',
          foodname: 'Pancakes',
          types: ['breakfast', 'lunch', 'dinner'],
          description:
            'Maecenas nec tempus eros, ac sagittis lacus. Sed interdum, arcu ac maximus condimentum, arcu erat sollicitudin risus, at semper nibh enim ut ipsum. Etiam porta blandit diam, in blandit diam semper eget. Vestibulum tincidunt vel lorem sit amet blandit. Curabitur lacinia neque et feugiat commodo. Suspendisse potenti. Sed vel rhoncus eros, a bibendum velit. Sed quis accumsan lorem, ut convallis augue. Mauris libero nulla, feugiat nec dignissim a, tristique in augue. Donec iaculis lobortis ante nec consectetur. Sed ac scelerisque tellus.',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/b/b0/Palatschinke.jpg',
        },
        {
          id: 'r2',
          foodname: 'Donuts',
          types: ['lunch'],
          description:
            'Morbi arcu leo, fermentum quis sapien ut, lobortis condimentum tortor. Nullam pretium tortor quis neque cursus varius. Quisque sodales lorem nisi, vitae scelerisque justo luctus non. Morbi eleifend ipsum tortor, pulvinar viverra turpis sollicitudin aliquet. Donec faucibus enim condimentum nisl lobortis convallis. Donec sagittis lacus dictum facilisis facilisis. Praesent eget lorem mollis, feugiat lacus eget, dignissim ipsum. Nam vitae suscipit dui, sed gravida ex. Etiam dignissim nunc magna, eget dignissim ante pulvinar eget. Curabitur et dui interdum, convallis turpis vel, congue neque. Nam vel venenatis nulla, vel malesuada augue. Integer volutpat arcu eu mi lobortis, quis dapibus metus viverra.',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/5/5d/Jack%27s_Donuts.jpg',
        },
        {
          id: 'r3',
          foodname: 'Pizza',
          types: ['dinner'],
          description:
            'In non tellus facilisis, aliquam tortor non, egestas ante. Cras eleifend nulla eu nunc rutrum vehicula. Nam ullamcorper, est vitae fermentum pretium, nulla ante pulvinar augue, et vulputate lorem massa ut nisi. Integer vulputate orci nec ligula tempus, eu iaculis tellus ultricies. Donec et ultrices justo, ut pharetra nisi. Pellentesque nec augue nulla. Proin dignissim leo at eros tincidunt venenatis. Integer consequat libero vitae efficitur maximus. Quisque tristique, erat vitae euismod egestas, purus nulla pulvinar ex, quis convallis lectus mi at velit. Sed eget ante vel metus ultrices tempus sit amet eget mi. Pellentesque viverra id sem id consequat. Donec diam massa, ultricies nec tellus porta, tincidunt dignissim diam. In commodo facilisis arcu, a rhoncus ante. Suspendisse facilisis tortor eget dui eleifend lobortis.',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        },
        {
          id: 'r4',
          foodname: 'Salad',
          types: ['lunch', 'dinner'],
          description:
            'Mauris libero nulla, feugiat nec dignissim a, tristique in augue. Donec iaculis lobortis ante nec consectetur. Sed ac scelerisque tellus. Sed fermentum sapien et fermentum luctus. Ut hendrerit arcu a elit vestibulum semper. Vestibulum et malesuada dui. Aenean vitae sapien in est feugiat suscipit. Nulla tincidunt porta justo non convallis. Suspendisse potenti. Praesent placerat sem nec eros pretium euismod. Vivamus volutpat velit libero, id iaculis turpis efficitur vel. Duis tincidunt tellus et tempus dapibus. Duis pharetra lobortis sollicitudin. Quisque et lectus malesuada, imperdiet ex a, cursus mi. Proin suscipit ipsum ac urna bibendum rhoncus.',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/5/58/GreenSalad.jpg',
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
