const eventsData = [
  {
    id: 12,
    title: 'Pool Party',
    media: 'https://picsum.photos/1080', 
    metadescription: 'Crazy evening around the Duplex pool',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer enim ligula, dignissim sit amet turpis nec, dignissim porta tortor. Sed at ultrices tellus. Aliquam nec orci quis nisi volutpat ultrices in non velit. Etiam convallis enim et lobortis venenatis. Aenean sed arcu turpis. Sed leo libero, accumsan blandit odio eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam orci turpis, eget mollis erat tincidunt eu.Vestibulum non maximus felis. Aenean consectetur ultrices felis, a porta tortor placerat eu. Aliquam in molestie ex. Etiam porttitor mattis orci, sed interdum ipsum accumsan a. Nam porttitor sodales tellus non ullamcorper. Phasellus sit amet sem sed ex mollis fermentum sed quis dui. Cras in rhoncus massa. Fusce aliquam euismod finibus. Praesent fermentum nunc non facilisis interdum. Vivamus id elementum orci. Fusce eget lectus efficitur, placerat sapien nec, mollis mauris. Aliquam consequat velit tellus, ac feugiat justo volutpat ut. Duis id odio eleifend, bibendum justo sit amet, luctus massa. Praesent vel purus in orci condimentum accumsan. Donec euismod metus rutrum, aliquam lorem id, mattis nisl. Sed varius ac erat id lobortis. Curabitur in eros ipsum. Aliquam erat volutpat. Nulla ac mauris quis nibh lacinia tempor quis ut eros. Phasellus imperdiet erat nisl, quis sodales nunc molestie ac. Quisque condimentum interdum tortor rhoncus aliquam. Cras facilisis laoreet justo eu molestie. Nam eu nulla eu purus elementum congue non nec odio. Donec dictum vitae dolor sit amet dignissim. Donec eu lacus et lacus congue blandit vel at sapien. In pretium venenatis quam, vitae commodo tellus.',
    start: new Date(),
    tag: [{
        id: 1, 
        emoji: '👯 ',
        name: 'Entre amis', 
        slug: 'entre-amis',
        color: '#f8efea'
      }, 
      {
        id: 2,
        emoji: '🕺 ',
        name: 'Danse', 
        slug: 'danse',
        color: '#ded369',
      }, 
      {
        id: 3,
        emoji: '🎶 ',
        name: 'Musique',
        slug: 'musique',
        color: '#f30067'
      }
    ],
    code_user_manager: {
      nickname: 'SoNow Event',
      defaut_profile_picture: 'src/images/profile.jpg'
    }, 
    user_attend_event: [1, 12, 18, 25, 42]
  },
  {
    id: 14,
    title: 'Pool Party',
    media: 'https://picsum.photos/1080', 
    metadescription: 'Crazy evening around the Duplex pool',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer enim ligula, dignissim sit amet turpis nec, dignissim porta tortor. Sed at ultrices tellus. Aliquam nec orci quis nisi volutpat ultrices in non velit. Etiam convallis enim et lobortis venenatis. Aenean sed arcu turpis. Sed leo libero, accumsan blandit odio eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam orci turpis, eget mollis erat tincidunt eu.Vestibulum non maximus felis. Aenean consectetur ultrices felis, a porta tortor placerat eu. Aliquam in molestie ex. Etiam porttitor mattis orci, sed interdum ipsum accumsan a. Nam porttitor sodales tellus non ullamcorper. Phasellus sit amet sem sed ex mollis fermentum sed quis dui. Cras in rhoncus massa. Fusce aliquam euismod finibus. Praesent fermentum nunc non facilisis interdum. Vivamus id elementum orci. Fusce eget lectus efficitur, placerat sapien nec, mollis mauris. Aliquam consequat velit tellus, ac feugiat justo volutpat ut. Duis id odio eleifend, bibendum justo sit amet, luctus massa. Praesent vel purus in orci condimentum accumsan. Donec euismod metus rutrum, aliquam lorem id, mattis nisl. Sed varius ac erat id lobortis. Curabitur in eros ipsum. Aliquam erat volutpat. Nulla ac mauris quis nibh lacinia tempor quis ut eros. Phasellus imperdiet erat nisl, quis sodales nunc molestie ac. Quisque condimentum interdum tortor rhoncus aliquam. Cras facilisis laoreet justo eu molestie. Nam eu nulla eu purus elementum congue non nec odio. Donec dictum vitae dolor sit amet dignissim. Donec eu lacus et lacus congue blandit vel at sapien. In pretium venenatis quam, vitae commodo tellus.',
    start: new Date(),
    tag: [{
        id: 1, 
        name: '👯 Entre amis', 
        color: '#f8efea'
      }, 
      {
        id: 2,
        name: '🕺 Danse', 
        color: '#ded369'
      }, 
      {
        id: 3,
        name: '🎶 Musique',
        color: '#f30067'
      }
    ],
    code_user_manager: {
      nickname: 'SoNow Event',
      defaut_profile_picture: 'src/images/profile.jpg'
    }, 
    user_attend_event: [1, 12, 18, 25, 42, 78, 85, 90, 312 ,580, 1028]
  },
  {
    id: 15,
    title: 'Pool Party',
    media: 'https://picsum.photos/1080', 
    metadescription: 'Crazy evening around the Duplex pool',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer enim ligula, dignissim sit amet turpis nec, dignissim porta tortor. Sed at ultrices tellus. Aliquam nec orci quis nisi volutpat ultrices in non velit. Etiam convallis enim et lobortis venenatis. Aenean sed arcu turpis. Sed leo libero, accumsan blandit odio eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam orci turpis, eget mollis erat tincidunt eu.Vestibulum non maximus felis. Aenean consectetur ultrices felis, a porta tortor placerat eu. Aliquam in molestie ex. Etiam porttitor mattis orci, sed interdum ipsum accumsan a. Nam porttitor sodales tellus non ullamcorper. Phasellus sit amet sem sed ex mollis fermentum sed quis dui. Cras in rhoncus massa. Fusce aliquam euismod finibus. Praesent fermentum nunc non facilisis interdum. Vivamus id elementum orci. Fusce eget lectus efficitur, placerat sapien nec, mollis mauris. Aliquam consequat velit tellus, ac feugiat justo volutpat ut. Duis id odio eleifend, bibendum justo sit amet, luctus massa. Praesent vel purus in orci condimentum accumsan. Donec euismod metus rutrum, aliquam lorem id, mattis nisl. Sed varius ac erat id lobortis. Curabitur in eros ipsum. Aliquam erat volutpat. Nulla ac mauris quis nibh lacinia tempor quis ut eros. Phasellus imperdiet erat nisl, quis sodales nunc molestie ac. Quisque condimentum interdum tortor rhoncus aliquam. Cras facilisis laoreet justo eu molestie. Nam eu nulla eu purus elementum congue non nec odio. Donec dictum vitae dolor sit amet dignissim. Donec eu lacus et lacus congue blandit vel at sapien. In pretium venenatis quam, vitae commodo tellus.',
    start: new Date(),
    tag: [{
      id: 1, 
      name: '👯 Entre amis', 
      color: '#f8efea'
      }, 
      {
        id: 2,
        name: '🕺 Danse', 
        color: '#ded369'
      }, 
      {
        id: 3,
        name: '🎶 Musique',
        color: '#f30067'
      }
    ],
    code_user_manager: {
      nickname: 'SoNow Event',
      defaut_profile_picture: 'src/images/profile.jpg'
    }, 
    user_attend_event: [1, 12, 18, 25, 42, 98, 123]
  },
  {
    id: 16,
    title: 'Pool Party',
    media: 'https://picsum.photos/1080', 
    metadescription: 'Crazy evening around the Duplex pool',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer enim ligula, dignissim sit amet turpis nec, dignissim porta tortor. Sed at ultrices tellus. Aliquam nec orci quis nisi volutpat ultrices in non velit. Etiam convallis enim et lobortis venenatis. Aenean sed arcu turpis. Sed leo libero, accumsan blandit odio eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam orci turpis, eget mollis erat tincidunt eu.Vestibulum non maximus felis. Aenean consectetur ultrices felis, a porta tortor placerat eu. Aliquam in molestie ex. Etiam porttitor mattis orci, sed interdum ipsum accumsan a. Nam porttitor sodales tellus non ullamcorper. Phasellus sit amet sem sed ex mollis fermentum sed quis dui. Cras in rhoncus massa. Fusce aliquam euismod finibus. Praesent fermentum nunc non facilisis interdum. Vivamus id elementum orci. Fusce eget lectus efficitur, placerat sapien nec, mollis mauris. Aliquam consequat velit tellus, ac feugiat justo volutpat ut. Duis id odio eleifend, bibendum justo sit amet, luctus massa. Praesent vel purus in orci condimentum accumsan. Donec euismod metus rutrum, aliquam lorem id, mattis nisl. Sed varius ac erat id lobortis. Curabitur in eros ipsum. Aliquam erat volutpat. Nulla ac mauris quis nibh lacinia tempor quis ut eros. Phasellus imperdiet erat nisl, quis sodales nunc molestie ac. Quisque condimentum interdum tortor rhoncus aliquam. Cras facilisis laoreet justo eu molestie. Nam eu nulla eu purus elementum congue non nec odio. Donec dictum vitae dolor sit amet dignissim. Donec eu lacus et lacus congue blandit vel at sapien. In pretium venenatis quam, vitae commodo tellus.',
    start: new Date(),
    tag: [{
      id: 1, 
      name: '👯 Entre amis', 
      color: '#f8efea'
      }, 
      {
        id: 2,
        name: '🕺 Danse', 
        color: '#ded369'
      }, 
      {
        id: 3,
        name: '🎶 Musique',
        color: '#f30067'
      }
    ],
    code_user_manager: {
      nickname: 'SoNow Event',
      defaut_profile_picture: 'src/images/profile.jpg'
    }, 
    user_attend_event: [1, 12, 18, 25, 42]
  }
];

export default eventsData;