const eventsData = [
  {
    id: 12,
    title: 'Pool Party',
    slug:'pool-party',
    media: 'https://picsum.photos/1080', 
    metadescription: 'Crazy evening around the Duplex pool',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer enim ligula, dignissim sit amet turpis nec, dignissim porta tortor. Sed at ultrices tellus. Aliquam nec orci quis nisi volutpat ultrices in non velit. Etiam convallis enim et lobortis venenatis.',
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
    title: 'Autre Pool Party',
    slug: 'autre-pool-party',
    media: 'https://picsum.photos/1080', 
    metadescription: 'Crazy evening around the Duplex pool',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer enim ligula, dignissim sit amet turpis nec, dignissim porta tortor. Sed at ultrices tellus. Aliquam nec orci quis nisi volutpat ultrices in non velit. Etiam convallis enim et lobortis venenatis.',
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
    title: 'Super-event',
    slug: 'super-event',
    media: 'https://picsum.photos/1080', 
    metadescription: 'Crazy evening around the Duplex pool',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer enim ligula, dignissim sit amet turpis nec, dignissim porta tortor. Sed at ultrices tellus. Aliquam nec orci quis nisi volutpat ultrices in non velit. Etiam convallis enim et lobortis venenatis.',
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
    title: 'Mega cool event',
    slug: 'mega-cool-event',
    media: 'https://picsum.photos/1080', 
    metadescription: 'Crazy evening around the Duplex pool',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer enim ligula, dignissim sit amet turpis nec, dignissim porta tortor. Sed at ultrices tellus. Aliquam nec orci quis nisi volutpat ultrices in non velit. Etiam convallis enim et lobortis venenatis.',
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