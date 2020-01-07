new Vue({
  el: '#carousel-produtos',
    data: {
      slides: [{
        name: 'Slide name 1',
        mainSrc: 'https://cdn.pixabay.com/photo/2014/04/03/10/24/butterfly-310351_960_720.png',
        title: 'Mundo da Babi',
        desc: 'acesse',
        tag: 'Blog',
      }, {
        name: 'Slide name 2',
        mainSrc: 'https://cdn.pixabay.com/photo/2014/04/03/10/24/butterfly-310351_960_720.png',
        title: 'Mundo da Babi',
        desc: 'acesse',
        tag: 'Blog',
      }, {
        name: 'Slide name 3',
        mainSrc: 'https://cdn.pixabay.com/photo/2014/04/03/10/24/butterfly-310351_960_720.png',
        title: 'Mundo da Babi',
        desc: 'acesse',
        tag: 'Blog',
      }, {
        name: 'Slide name 4',
        mainSrc: 'https://cdn.pixabay.com/photo/2014/04/03/10/24/butterfly-310351_960_720.png',
        title: 'Mundo da Babi',
        desc: 'acesse',
        tag: 'Blog',
      }, {
        name: 'Slide name 5',
        mainSrc: 'https://cdn.pixabay.com/photo/2014/04/03/10/24/butterfly-310351_960_720.png',
        title: 'Mundo da Babi',
        desc: 'acesse',
        tag: 'Blog',
      }, {
        name: 'Slide name 6',
        mainSrc: 'https://cdn.pixabay.com/photo/2014/04/03/10/24/butterfly-310351_960_720.png',
        title: 'Mundo da Babi',
        desc: 'acesse',
        tag: 'Blog',
      }, {
        name: 'Slide name 7',
        mainSrc: 'https://cdn.pixabay.com/photo/2014/04/03/10/24/butterfly-310351_960_720.png',
        title: 'Mundo da Babi',
        desc: 'acesse',
        tag: 'Blog',
      }]
    },
    components: {
      'carousel-3d': Carousel3d.Carousel3d,
      'slide': Carousel3d.Slide
    }
  });

/*data: {
    slides: [{
       title: 'Mundo da Babi',
       mainSrc: 'https://cdn.pixabay.com/photo/2014/04/03/10/24/butterfly-310351_960_720.png',
       logoSrc: '',
       desc: 'acesse',
       tag: 'Blog',
       resize: false,
       resizeMed: true
    }, {
       title: 'Imobiliária Vasconcelos',
       mainSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT07SyocoSU7wvHYJ0IapHwRh9ANX8nWHZjDLNY8oeq8wxRRSBK&s',
       logoSrc: '',
       desc: 'acesse',
       tag: 'Site',
       resize: false
    }, {
       title: 'Kevin Arquitetura',
       mainSrc: 'https://www.w3schools.com/w3css/img_avatar3.png',
       logoSrc: '',
       desc: 'acesse',
       tag: 'Site',
       resize: true
    }, {
       title: 'Mundo da Babi',
       mainSrc: 'https://cdn.pixabay.com/photo/2014/04/03/10/24/butterfly-310351_960_720.png',
       logoSrc: '',
       desc: 'acesse',
       tag: 'Blog',
       resize: false,
       resizeMed: true
    }, {
       title: 'Mundo da Babi',
       mainSrc: 'https://cdn.pixabay.com/photo/2014/04/03/10/24/butterfly-310351_960_720.png',
       logoSrc: '',
       desc: 'acesse',
       tag: 'Blog',
       resize: false,
       resizeMed: true
    }]
  }, */