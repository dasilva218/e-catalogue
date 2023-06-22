import { createSlice } from '@reduxjs/toolkit';

const data = [
  {
    _id: {
      $oid: '64521116b4e8f4fd57934933',
    },
    name: 'Ondricka, Miller and Veum',
    phone: ['021 00 33 70'],
    email: 'Janelle65@yahoo.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'libreville',
    district: 'New Haven',
    time: {
      open: '08',
      close: '16',
    },
    rent: false,
    sale: true,
    salecar: [
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Passenger Van',
        year: '2005',
        price: 20000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521116b4e8f4fd57934934',
        },
        createdAt: {
          $date: {
            $numberLong: '1683099927008',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683099927008',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Gasoline',
        transmission: 'manuel',
        type: 'Coupe',
        year: '2005',
        price: 20000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521116b4e8f4fd57934935',
        },
        createdAt: {
          $date: {
            $numberLong: '1683099927009',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683099927009',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Hybrid',
        transmission: 'manuel',
        type: 'Wagon',
        year: '2005',
        price: 20000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521116b4e8f4fd57934936',
        },
        createdAt: {
          $date: {
            $numberLong: '1683099927009',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683099927009',
          },
        },
      },
    ],
    rentcar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683099927008',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683099927008',
      },
    },
  },
  {
    _id: {
      $oid: '64521116b4e8f4fd57934937',
    },
    name: 'McLaughlin - Lowe',
    phone: ['098 77 34 81'],
    email: 'Aurore.Dare78@gmail.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'libreville',
    district: 'Binghamton',
    time: {
      open: '08',
      close: '16',
    },
    rent: false,
    sale: true,
    salecar: [
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Hybrid',
        transmission: 'manuel',
        type: 'Passenger Van',
        year: '2005',
        price: 20000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521116b4e8f4fd57934938',
        },
        createdAt: {
          $date: {
            $numberLong: '1683099927010',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683099927010',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Extended Cab Pickup',
        year: '2005',
        price: 20000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521116b4e8f4fd57934939',
        },
        createdAt: {
          $date: {
            $numberLong: '1683099927010',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683099927010',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Hybrid',
        transmission: 'manuel',
        type: 'Cargo Van',
        year: '2005',
        price: 20000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521116b4e8f4fd5793493a',
        },
        createdAt: {
          $date: {
            $numberLong: '1683099927010',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683099927010',
          },
        },
      },
    ],
    rentcar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683099927010',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683099927010',
      },
    },
  },
  {
    _id: {
      $oid: '64521116b4e8f4fd5793493b',
    },
    name: 'Wolf, MacGyver and Feest',
    phone: ['061 47 27 21'],
    email: 'Cleta_Price@yahoo.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'libreville',
    district: 'Middletown',
    time: {
      open: '08',
      close: '16',
    },
    rent: false,
    sale: true,
    salecar: [
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Electric',
        transmission: 'manuel',
        type: 'Crew Cab Pickup',
        year: '2005',
        price: 20000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521116b4e8f4fd5793493c',
        },
        createdAt: {
          $date: {
            $numberLong: '1683099927011',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683099927011',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Hybrid',
        transmission: 'manuel',
        type: 'Sedan',
        year: '2005',
        price: 20000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521116b4e8f4fd5793493d',
        },
        createdAt: {
          $date: {
            $numberLong: '1683099927011',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683099927011',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Hybrid',
        transmission: 'manuel',
        type: 'Wagon',
        year: '2005',
        price: 20000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521116b4e8f4fd5793493e',
        },
        createdAt: {
          $date: {
            $numberLong: '1683099927011',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683099927011',
          },
        },
      },
    ],
    rentcar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683099927011',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683099927011',
      },
    },
  },
  {
    _id: {
      $oid: '64521116b4e8f4fd5793493f',
    },
    name: 'Douglas, Heidenreich and Bartell',
    phone: ['033 43 17 64'],
    email: 'Camila.Bayer@hotmail.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'libreville',
    district: 'Reston',
    time: {
      open: '08',
      close: '16',
    },
    rent: false,
    sale: true,
    salecar: [
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Coupe',
        year: '2005',
        price: 20000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521116b4e8f4fd57934940',
        },
        createdAt: {
          $date: {
            $numberLong: '1683099927012',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683099927012',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Crew Cab Pickup',
        year: '2005',
        price: 20000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521116b4e8f4fd57934941',
        },
        createdAt: {
          $date: {
            $numberLong: '1683099927012',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683099927012',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Hybrid',
        transmission: 'manuel',
        type: 'Wagon',
        year: '2005',
        price: 20000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521116b4e8f4fd57934942',
        },
        createdAt: {
          $date: {
            $numberLong: '1683099927012',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683099927012',
          },
        },
      },
    ],
    rentcar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683099927011',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683099927011',
      },
    },
  },
  {
    _id: {
      $oid: '64521116b4e8f4fd57934943',
    },
    name: 'Mueller - Leuschke',
    phone: ['073 76 12 13'],
    email: 'Ole.Herzog@yahoo.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'libreville',
    district: 'Pomona',
    time: {
      open: '08',
      close: '16',
    },
    rent: false,
    sale: true,
    salecar: [
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Hatchback',
        year: '2005',
        price: 20000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521116b4e8f4fd57934944',
        },
        createdAt: {
          $date: {
            $numberLong: '1683099927012',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683099927012',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Gasoline',
        transmission: 'manuel',
        type: 'Hatchback',
        year: '2005',
        price: 20000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521116b4e8f4fd57934945',
        },
        createdAt: {
          $date: {
            $numberLong: '1683099927012',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683099927012',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Coupe',
        year: '2005',
        price: 20000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521116b4e8f4fd57934946',
        },
        createdAt: {
          $date: {
            $numberLong: '1683099927012',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683099927012',
          },
        },
      },
    ],
    rentcar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683099927012',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683099927012',
      },
    },
  },
  {
    _id: {
      $oid: '645212fab4e8f4fd57934948',
    },
    name: 'Wisoky - Zulauf',
    phone: ['087 53 85 67'],
    email: 'Makayla99@yahoo.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'owendo',
    district: 'Coral Gables',
    time: {
      open: '08',
      close: '16',
    },
    rent: false,
    sale: true,
    salecar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Electric',
        transmission: 'manuel',
        type: 'Hatchback',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '645212fab4e8f4fd57934949',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100410841',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100410841',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Hybrid',
        transmission: 'manuel',
        type: 'Wagon',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '645212fab4e8f4fd5793494a',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100410842',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100410842',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Gasoline',
        transmission: 'manuel',
        type: 'Minivan',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '645212fab4e8f4fd5793494b',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100410842',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100410842',
          },
        },
      },
    ],
    rentcar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100410841',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100410841',
      },
    },
  },
  {
    _id: {
      $oid: '645212fab4e8f4fd5793494c',
    },
    name: 'Carroll, Torphy and Volkman',
    phone: ['050 46 83 49'],
    email: 'Nathaniel55@yahoo.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'owendo',
    district: 'Pittsburg',
    time: {
      open: '08',
      close: '16',
    },
    rent: false,
    sale: true,
    salecar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Cargo Van',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '645212fab4e8f4fd5793494d',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100410842',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100410842',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Gasoline',
        transmission: 'manuel',
        type: 'Minivan',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '645212fab4e8f4fd5793494e',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100410842',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100410842',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Hybrid',
        transmission: 'manuel',
        type: 'Passenger Van',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '645212fab4e8f4fd5793494f',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100410842',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100410842',
          },
        },
      },
    ],
    rentcar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100410842',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100410842',
      },
    },
  },
  {
    _id: {
      $oid: '645212fab4e8f4fd57934950',
    },
    name: 'Wilkinson, Pollich and Sipes',
    phone: ['012 17 47 38'],
    email: 'Mariana.Weber81@gmail.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'owendo',
    district: 'Chesapeake',
    time: {
      open: '08',
      close: '16',
    },
    rent: false,
    sale: true,
    salecar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Coupe',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '645212fab4e8f4fd57934951',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100410842',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100410842',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Gasoline',
        transmission: 'manuel',
        type: 'Coupe',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '645212fab4e8f4fd57934952',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100410842',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100410842',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Electric',
        transmission: 'manuel',
        type: 'Minivan',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '645212fab4e8f4fd57934953',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100410842',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100410842',
          },
        },
      },
    ],
    rentcar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100410842',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100410842',
      },
    },
  },
  {
    _id: {
      $oid: '645212fab4e8f4fd57934954',
    },
    name: 'Kohler - Carter',
    phone: ['079 46 06 08'],
    email: 'Zachariah_Wilkinson@gmail.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'owendo',
    district: 'Edmond',
    time: {
      open: '08',
      close: '16',
    },
    rent: false,
    sale: true,
    salecar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'SUV',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '645212fab4e8f4fd57934955',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100410843',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100410843',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Electric',
        transmission: 'manuel',
        type: 'Wagon',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '645212fab4e8f4fd57934956',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100410843',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100410843',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Coupe',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '645212fab4e8f4fd57934957',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100410843',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100410843',
          },
        },
      },
    ],
    rentcar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100410843',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100410843',
      },
    },
  },
  {
    _id: {
      $oid: '645212fab4e8f4fd57934958',
    },
    name: 'Bartoletti - Russel',
    phone: ['076 66 41 25'],
    email: 'Joelle_Toy@hotmail.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'owendo',
    district: 'St. Peters',
    time: {
      open: '08',
      close: '16',
    },
    rent: false,
    sale: true,
    salecar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Wagon',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '645212fab4e8f4fd57934959',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100410843',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100410843',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Convertible',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '645212fab4e8f4fd5793495a',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100410843',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100410843',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Minivan',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '645212fab4e8f4fd5793495b',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100410843',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100410843',
          },
        },
      },
    ],
    rentcar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100410843',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100410843',
      },
    },
  },
  {
    _id: {
      $oid: '64521368b4e8f4fd5793495d',
    },
    name: 'Romaguera, Runolfsson and Gislason',
    phone: ['072 85 23 86'],
    email: 'Esperanza.Gusikowski@gmail.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'akanda',
    district: 'Surprise',
    time: {
      open: '08',
      close: '16',
    },
    rent: false,
    sale: true,
    salecar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Coupe',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '64521368b4e8f4fd5793495e',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100520974',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100520974',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Hybrid',
        transmission: 'manuel',
        type: 'Minivan',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521368b4e8f4fd5793495f',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100520974',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100520974',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Electric',
        transmission: 'manuel',
        type: 'Coupe',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521368b4e8f4fd57934960',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100520974',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100520974',
          },
        },
      },
    ],
    rentcar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100520974',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100520974',
      },
    },
  },
  {
    _id: {
      $oid: '64521368b4e8f4fd57934961',
    },
    name: "O'Keefe Inc",
    phone: ['088 34 85 42'],
    email: 'Sidney_Kshlerin@gmail.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'akanda',
    district: 'South Jordan',
    time: {
      open: '08',
      close: '16',
    },
    rent: false,
    sale: true,
    salecar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Passenger Van',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '64521368b4e8f4fd57934962',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100520974',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100520974',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Electric',
        transmission: 'manuel',
        type: 'Convertible',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521368b4e8f4fd57934963',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100520974',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100520974',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Convertible',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521368b4e8f4fd57934964',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100520975',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100520975',
          },
        },
      },
    ],
    rentcar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100520974',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100520974',
      },
    },
  },
  {
    _id: {
      $oid: '64521368b4e8f4fd57934965',
    },
    name: 'Tromp, Ferry and Hintz',
    phone: ['033 94 81 57'],
    email: 'Beverly_Mayert@hotmail.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'akanda',
    district: 'Everett',
    time: {
      open: '08',
      close: '16',
    },
    rent: false,
    sale: true,
    salecar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Hatchback',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '64521368b4e8f4fd57934966',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100520975',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100520975',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Gasoline',
        transmission: 'manuel',
        type: 'Cargo Van',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521368b4e8f4fd57934967',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100520975',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100520975',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Gasoline',
        transmission: 'manuel',
        type: 'Convertible',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521368b4e8f4fd57934968',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100520975',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100520975',
          },
        },
      },
    ],
    rentcar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100520975',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100520975',
      },
    },
  },
  {
    _id: {
      $oid: '64521368b4e8f4fd57934969',
    },
    name: 'Towne and Sons',
    phone: ['056 11 23 46'],
    email: 'Isai.Lynch23@gmail.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'akanda',
    district: 'Somerville',
    time: {
      open: '08',
      close: '16',
    },
    rent: false,
    sale: true,
    salecar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Electric',
        transmission: 'manuel',
        type: 'Passenger Van',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '64521368b4e8f4fd5793496a',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100520975',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100520975',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Coupe',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521368b4e8f4fd5793496b',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100520975',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100520975',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Gasoline',
        transmission: 'manuel',
        type: 'Wagon',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521368b4e8f4fd5793496c',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100520975',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100520975',
          },
        },
      },
    ],
    rentcar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100520975',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100520975',
      },
    },
  },
  {
    _id: {
      $oid: '64521368b4e8f4fd5793496d',
    },
    name: 'Gislason Inc',
    phone: ['073 50 08 02'],
    email: 'Ernestine_Sporer90@hotmail.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'akanda',
    district: 'Gary',
    time: {
      open: '08',
      close: '16',
    },
    rent: false,
    sale: true,
    salecar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Hatchback',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '64521368b4e8f4fd5793496e',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100520975',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100520975',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'SUV',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521368b4e8f4fd5793496f',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100520975',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100520975',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Gasoline',
        transmission: 'manuel',
        type: 'Convertible',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521368b4e8f4fd57934970',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100520975',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100520975',
          },
        },
      },
    ],
    rentcar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100520975',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100520975',
      },
    },
  },
  {
    _id: {
      $oid: '64521424b4e8f4fd57934972',
    },
    name: 'Labadie - Friesen',
    phone: ['039 99 88 63'],
    email: 'Ward.Mann@yahoo.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'akanda',
    district: 'Oro Valley',
    time: {
      open: '08',
      close: '16',
    },
    rent: true,
    sale: false,
    rentcar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Hatchback',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '64521424b4e8f4fd57934973',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100708304',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100708304',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Gasoline',
        transmission: 'manuel',
        type: 'Passenger Van',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521424b4e8f4fd57934974',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100708305',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100708305',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Wagon',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521424b4e8f4fd57934975',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100708305',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100708305',
          },
        },
      },
    ],
    salecar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100708303',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100708303',
      },
    },
  },
  {
    _id: {
      $oid: '64521424b4e8f4fd57934976',
    },
    name: 'Tremblay Inc',
    phone: ['021 11 51 05'],
    email: 'Shana_Monahan92@yahoo.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'akanda',
    district: 'Santa Clarita',
    time: {
      open: '08',
      close: '16',
    },
    rent: true,
    sale: false,
    rentcar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Hybrid',
        transmission: 'manuel',
        type: 'Sedan',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '64521424b4e8f4fd57934977',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100708306',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100708306',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Electric',
        transmission: 'manuel',
        type: 'Crew Cab Pickup',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521424b4e8f4fd57934978',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100708306',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100708306',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Electric',
        transmission: 'manuel',
        type: 'Convertible',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521424b4e8f4fd57934979',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100708306',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100708306',
          },
        },
      },
    ],
    salecar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100708306',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100708306',
      },
    },
  },
  {
    _id: {
      $oid: '64521424b4e8f4fd5793497a',
    },
    name: 'VonRueden Group',
    phone: ['080 15 48 73'],
    email: 'Kenyatta.Spencer@gmail.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'akanda',
    district: 'Catalina Foothills',
    time: {
      open: '08',
      close: '16',
    },
    rent: true,
    sale: false,
    rentcar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Hybrid',
        transmission: 'manuel',
        type: 'Sedan',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '64521424b4e8f4fd5793497b',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100708307',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100708307',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Gasoline',
        transmission: 'manuel',
        type: 'Coupe',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521424b4e8f4fd5793497c',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100708307',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100708307',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Gasoline',
        transmission: 'manuel',
        type: 'SUV',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521424b4e8f4fd5793497d',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100708307',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100708307',
          },
        },
      },
    ],
    salecar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100708307',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100708307',
      },
    },
  },
  {
    _id: {
      $oid: '64521424b4e8f4fd5793497e',
    },
    name: 'Cormier, Krajcik and Graham',
    phone: ['003 76 26 83'],
    email: 'Shad15@yahoo.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'akanda',
    district: 'Collierville',
    time: {
      open: '08',
      close: '16',
    },
    rent: true,
    sale: false,
    rentcar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Hybrid',
        transmission: 'manuel',
        type: 'SUV',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '64521424b4e8f4fd5793497f',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100708308',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100708308',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Hybrid',
        transmission: 'manuel',
        type: 'Extended Cab Pickup',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521424b4e8f4fd57934980',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100708308',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100708308',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Hybrid',
        transmission: 'manuel',
        type: 'Passenger Van',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521424b4e8f4fd57934981',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100708308',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100708308',
          },
        },
      },
    ],
    salecar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100708308',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100708308',
      },
    },
  },
  {
    _id: {
      $oid: '64521424b4e8f4fd57934982',
    },
    name: 'Price, Zboncak and Hammes',
    phone: ['058 04 10 93'],
    email: 'Timmy61@hotmail.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'akanda',
    district: 'Kokomo',
    time: {
      open: '08',
      close: '16',
    },
    rent: true,
    sale: false,
    rentcar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Hybrid',
        transmission: 'manuel',
        type: 'Wagon',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '64521424b4e8f4fd57934983',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100708309',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100708309',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Gasoline',
        transmission: 'manuel',
        type: 'Passenger Van',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521424b4e8f4fd57934984',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100708309',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100708309',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Hybrid',
        transmission: 'manuel',
        type: 'Convertible',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521424b4e8f4fd57934985',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100708309',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100708309',
          },
        },
      },
    ],
    salecar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100708308',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100708308',
      },
    },
  },
  {
    _id: {
      $oid: '64521469b4e8f4fd57934987',
    },
    name: 'Wehner LLC',
    phone: ['072 70 59 11'],
    email: 'Belle.Hoeger89@hotmail.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'libreville',
    district: 'Paramount',
    time: {
      open: '08',
      close: '16',
    },
    rent: true,
    sale: false,
    rentcar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Gasoline',
        transmission: 'manuel',
        type: 'Coupe',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '64521469b4e8f4fd57934988',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100777867',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100777867',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Crew Cab Pickup',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521469b4e8f4fd57934989',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100777867',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100777867',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Convertible',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521469b4e8f4fd5793498a',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100777867',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100777867',
          },
        },
      },
    ],
    salecar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100777867',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100777867',
      },
    },
  },
  {
    _id: {
      $oid: '64521469b4e8f4fd5793498b',
    },
    name: 'Huels - Kautzer',
    phone: ['034 75 85 41'],
    email: 'Carley57@gmail.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'libreville',
    district: 'Layton',
    time: {
      open: '08',
      close: '16',
    },
    rent: true,
    sale: false,
    rentcar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Gasoline',
        transmission: 'manuel',
        type: 'Minivan',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '64521469b4e8f4fd5793498c',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100777868',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100777868',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Minivan',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521469b4e8f4fd5793498d',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100777868',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100777868',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Gasoline',
        transmission: 'manuel',
        type: 'Cargo Van',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521469b4e8f4fd5793498e',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100777868',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100777868',
          },
        },
      },
    ],
    salecar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100777868',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100777868',
      },
    },
  },
  {
    _id: {
      $oid: '64521469b4e8f4fd5793498f',
    },
    name: 'Kilback LLC',
    phone: ['033 00 57 97'],
    email: 'Jess_Batz@yahoo.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'libreville',
    district: 'Port Orange',
    time: {
      open: '08',
      close: '16',
    },
    rent: true,
    sale: false,
    rentcar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Electric',
        transmission: 'manuel',
        type: 'SUV',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '64521469b4e8f4fd57934990',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100777868',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100777868',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Gasoline',
        transmission: 'manuel',
        type: 'Coupe',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521469b4e8f4fd57934991',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100777869',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100777869',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Electric',
        transmission: 'manuel',
        type: 'Cargo Van',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521469b4e8f4fd57934992',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100777869',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100777869',
          },
        },
      },
    ],
    salecar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100777868',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100777868',
      },
    },
  },
  {
    _id: {
      $oid: '64521469b4e8f4fd57934993',
    },
    name: 'Marquardt - Krajcik',
    phone: ['026 50 25 10'],
    email: 'Clyde.Corkery78@yahoo.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'libreville',
    district: 'Brookhaven',
    time: {
      open: '08',
      close: '16',
    },
    rent: true,
    sale: false,
    rentcar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Hybrid',
        transmission: 'manuel',
        type: 'Sedan',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '64521469b4e8f4fd57934994',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100777869',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100777869',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Hybrid',
        transmission: 'manuel',
        type: 'Wagon',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521469b4e8f4fd57934995',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100777869',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100777869',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Electric',
        transmission: 'manuel',
        type: 'Passenger Van',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521469b4e8f4fd57934996',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100777869',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100777869',
          },
        },
      },
    ],
    salecar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100777869',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100777869',
      },
    },
  },
  {
    _id: {
      $oid: '64521469b4e8f4fd57934997',
    },
    name: 'Wilderman LLC',
    phone: ['004 35 08 68'],
    email: 'Cyrus_Rau30@hotmail.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'libreville',
    district: 'Napa',
    time: {
      open: '08',
      close: '16',
    },
    rent: true,
    sale: false,
    rentcar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Hybrid',
        transmission: 'manuel',
        type: 'Convertible',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '64521469b4e8f4fd57934998',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100777869',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100777869',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Electric',
        transmission: 'manuel',
        type: 'Extended Cab Pickup',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521469b4e8f4fd57934999',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100777869',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100777869',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Gasoline',
        transmission: 'manuel',
        type: 'Coupe',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '64521469b4e8f4fd5793499a',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100777869',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100777869',
          },
        },
      },
    ],
    salecar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100777869',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100777869',
      },
    },
  },
  {
    _id: {
      $oid: '6452149db4e8f4fd5793499c',
    },
    name: 'Stroman - Harber',
    phone: ['095 86 01 56'],
    email: 'Antoinette_Lemke@yahoo.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'libreville',
    district: 'Olathe',
    time: {
      open: '08',
      close: '16',
    },
    rent: true,
    sale: false,
    rentcar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Gasoline',
        transmission: 'manuel',
        type: 'Hatchback',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '6452149db4e8f4fd5793499d',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100829827',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100829827',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Hatchback',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '6452149db4e8f4fd5793499e',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100829827',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100829827',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Hybrid',
        transmission: 'manuel',
        type: 'Cargo Van',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '6452149db4e8f4fd5793499f',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100829827',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100829827',
          },
        },
      },
    ],
    salecar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100829827',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100829827',
      },
    },
  },
  {
    _id: {
      $oid: '6452149db4e8f4fd579349a0',
    },
    name: 'Moore, Cole and Shields',
    phone: ['011 81 70 23'],
    email: 'Dillan_Schoen@gmail.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'libreville',
    district: 'Ann Arbor',
    time: {
      open: '08',
      close: '16',
    },
    rent: true,
    sale: false,
    rentcar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Hybrid',
        transmission: 'manuel',
        type: 'Crew Cab Pickup',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '6452149db4e8f4fd579349a1',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100829827',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100829827',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Convertible',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '6452149db4e8f4fd579349a2',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100829828',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100829828',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Hybrid',
        transmission: 'manuel',
        type: 'Wagon',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '6452149db4e8f4fd579349a3',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100829828',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100829828',
          },
        },
      },
    ],
    salecar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100829827',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100829827',
      },
    },
  },
  {
    _id: {
      $oid: '6452149db4e8f4fd579349a4',
    },
    name: 'Durgan and Sons',
    phone: ['036 17 14 97'],
    email: 'Carolanne.Bayer56@yahoo.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'libreville',
    district: 'Elyria',
    time: {
      open: '08',
      close: '16',
    },
    rent: true,
    sale: false,
    rentcar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Hybrid',
        transmission: 'manuel',
        type: 'Passenger Van',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '6452149db4e8f4fd579349a5',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100829828',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100829828',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Gasoline',
        transmission: 'manuel',
        type: 'Cargo Van',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '6452149db4e8f4fd579349a6',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100829828',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100829828',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Electric',
        transmission: 'manuel',
        type: 'Cargo Van',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '6452149db4e8f4fd579349a7',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100829828',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100829828',
          },
        },
      },
    ],
    salecar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100829828',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100829828',
      },
    },
  },
  {
    _id: {
      $oid: '6452149db4e8f4fd579349a8',
    },
    name: "O'Connell Inc",
    phone: ['027 16 25 42'],
    email: 'Enoch_Bahringer@hotmail.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'libreville',
    district: 'Pasco',
    time: {
      open: '08',
      close: '16',
    },
    rent: true,
    sale: false,
    rentcar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Gasoline',
        transmission: 'manuel',
        type: 'Hatchback',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '6452149db4e8f4fd579349a9',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100829828',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100829828',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Electric',
        transmission: 'manuel',
        type: 'Extended Cab Pickup',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '6452149db4e8f4fd579349aa',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100829828',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100829828',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Gasoline',
        transmission: 'manuel',
        type: 'Sedan',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '6452149db4e8f4fd579349ab',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100829829',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100829829',
          },
        },
      },
    ],
    salecar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100829828',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100829828',
      },
    },
  },
  {
    _id: {
      $oid: '6452149db4e8f4fd579349ac',
    },
    name: 'Upton - Marquardt',
    phone: ['030 45 67 24'],
    email: 'Alva_Ebert29@hotmail.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'libreville',
    district: 'Malden',
    time: {
      open: '08',
      close: '16',
    },
    rent: true,
    sale: false,
    rentcar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Passenger Van',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '6452149db4e8f4fd579349ad',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100829829',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100829829',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Electric',
        transmission: 'manuel',
        type: 'Cargo Van',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '6452149db4e8f4fd579349ae',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100829829',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100829829',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Electric',
        transmission: 'manuel',
        type: 'Cargo Van',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '6452149db4e8f4fd579349af',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100829829',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100829829',
          },
        },
      },
    ],
    salecar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100829829',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100829829',
      },
    },
  },
  {
    _id: {
      $oid: '645214ecb4e8f4fd579349b1',
    },
    name: 'Will - Champlin',
    phone: ['045 53 15 63'],
    email: 'Flo30@yahoo.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'owendo',
    district: 'Waltham',
    time: {
      open: '08',
      close: '16',
    },
    rent: true,
    sale: false,
    rentcar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Gasoline',
        transmission: 'manuel',
        type: 'Passenger Van',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '645214ecb4e8f4fd579349b2',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100908315',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100908315',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Gasoline',
        transmission: 'manuel',
        type: 'Sedan',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '645214ecb4e8f4fd579349b3',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100908316',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100908316',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Crew Cab Pickup',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '645214ecb4e8f4fd579349b4',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100908316',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100908316',
          },
        },
      },
    ],
    salecar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100908315',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100908315',
      },
    },
  },
  {
    _id: {
      $oid: '645214ecb4e8f4fd579349b5',
    },
    name: 'Kshlerin, Sporer and Kirlin',
    phone: ['066 65 39 13'],
    email: 'Hermann_Kessler@gmail.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'owendo',
    district: 'Cleveland Heights',
    time: {
      open: '08',
      close: '16',
    },
    rent: true,
    sale: false,
    rentcar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Electric',
        transmission: 'manuel',
        type: 'Extended Cab Pickup',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '645214ecb4e8f4fd579349b6',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100908316',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100908316',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Electric',
        transmission: 'manuel',
        type: 'Passenger Van',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '645214ecb4e8f4fd579349b7',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100908316',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100908316',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Gasoline',
        transmission: 'manuel',
        type: 'Sedan',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '645214ecb4e8f4fd579349b8',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100908316',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100908316',
          },
        },
      },
    ],
    salecar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100908316',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100908316',
      },
    },
  },
  {
    _id: {
      $oid: '645214ecb4e8f4fd579349b9',
    },
    name: 'Emard - Dickinson',
    phone: ['052 26 21 11'],
    email: 'Junius.Keeling62@gmail.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'owendo',
    district: 'Taylorsville',
    time: {
      open: '08',
      close: '16',
    },
    rent: true,
    sale: false,
    rentcar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Hatchback',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '645214ecb4e8f4fd579349ba',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100908316',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100908316',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Gasoline',
        transmission: 'manuel',
        type: 'Crew Cab Pickup',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '645214ecb4e8f4fd579349bb',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100908316',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100908316',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Electric',
        transmission: 'manuel',
        type: 'Cargo Van',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '645214ecb4e8f4fd579349bc',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100908316',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100908316',
          },
        },
      },
    ],
    salecar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100908316',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100908316',
      },
    },
  },
  {
    _id: {
      $oid: '645214ecb4e8f4fd579349bd',
    },
    name: 'Schimmel, Hand and Abernathy',
    phone: ['087 77 04 46'],
    email: 'Giovanni.Green52@yahoo.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'owendo',
    district: 'Provo',
    time: {
      open: '08',
      close: '16',
    },
    rent: true,
    sale: false,
    rentcar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Hybrid',
        transmission: 'manuel',
        type: 'SUV',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '645214ecb4e8f4fd579349be',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100908317',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100908317',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Electric',
        transmission: 'manuel',
        type: 'Cargo Van',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '645214ecb4e8f4fd579349bf',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100908317',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100908317',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Diesel',
        transmission: 'manuel',
        type: 'Minivan',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '645214ecb4e8f4fd579349c0',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100908317',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100908317',
          },
        },
      },
    ],
    salecar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100908317',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100908317',
      },
    },
  },
  {
    _id: {
      $oid: '645214ecb4e8f4fd579349c1',
    },
    name: 'Hoeger - Farrell',
    phone: ['094 48 99 86'],
    email: 'Oran.Zulauf@yahoo.com',
    logo: 'https://loremflickr.com/640/480/business',
    city: 'owendo',
    district: 'Paramount',
    time: {
      open: '08',
      close: '16',
    },
    rent: true,
    sale: false,
    rentcar: [
      {
        marque: 'Hyundai',
        model: 'avensis',
        fuel: 'Electric',
        transmission: 'manuel',
        type: 'Passenger Van',
        year: '2005',
        price: 20000,
        img: ['Hyundai'],
        door: 4,
        _id: {
          $oid: '645214ecb4e8f4fd579349c2',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100908317',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100908317',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Electric',
        transmission: 'manuel',
        type: 'SUV',
        year: '2005',
        price: 5000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '645214ecb4e8f4fd579349c3',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100908317',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100908317',
          },
        },
      },
      {
        marque: 'toyota',
        model: 'avensis',
        fuel: 'Hybrid',
        transmission: 'manuel',
        type: 'Sedan',
        year: '2005',
        price: 22000000,
        img: ['toyota'],
        door: 4,
        _id: {
          $oid: '645214ecb4e8f4fd579349c4',
        },
        createdAt: {
          $date: {
            $numberLong: '1683100908317',
          },
        },
        updatedAt: {
          $date: {
            $numberLong: '1683100908317',
          },
        },
      },
    ],
    salecar: [],
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: '1683100908317',
      },
    },
    updatedAt: {
      $date: {
        $numberLong: '1683100908317',
      },
    },
  },
];
const format = JSON.parse(JSON.stringify(data));
export const dealerslice = createSlice({
  name: 'dealers',
  initialState: {
    dealers: [],
  },
  reducers: {
    setDealers: (state, action) => {
      state.dealers = action.payload;
    },
  },
});

export const { setDealers } = dealerslice.actions;
export default dealerslice.reducer;
