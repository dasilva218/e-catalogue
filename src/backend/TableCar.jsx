import {
  addCarrs,
  deleteCar,
  get_car_rent,
  get_car_sale,
  numStr,
} from '@/libs/helpers';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useContext, useState } from 'react';
import { contextDealerDashboard } from '@/pages/wipauto/admin/concessionnaire/dashboard';
import { DeleteForever } from '@mui/icons-material';
import clsx from 'clsx';
import Image from 'next/image';
import axios from 'axios';

export function TableCar({ carSales }) {
  return (
    <div className='w*full h-full'>
      <table className='table h-full w-full'>
        <thead>
          <tr>
            <th>
              {/* <label>
                <input type='checkbox' className='checkbox' />
              </label> */}
            </th>
            <th>marque / model</th>
            <th>caractéristique</th>
            <th>prix</th>
          </tr>
        </thead>
        <tbody>
          {carSales.map((item, index) => (
            <Tr key={index} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Tr({ _id, marque, model, price, fuel, service }) {
  const { dealer, setCarSales, setCarRents } = useContext(
    contextDealerDashboard
  );

  // suppression d'un véhicule
  const Handledelete = async (id, service) => {
    let confirm = window.confirm('Le voulez vous vraiment ?');
    console.log(id, service);
    const CarDelete = await deleteCar(id);
    if (confirm) {
      if (service === 'vente') {
        const car = await get_car_sale(dealer._id);
        setCarSales(car);
      } else if (service === 'location') {
        const car = await get_car_rent(dealer._id);
        setCarRents(car);
      }
    }
  };

  return (
    <tr>
      <td>
        <button
          onClick={() => Handledelete(_id, service)}
          className='cursor'>
          <DeleteForever className=''></DeleteForever>
        </button>
      </td>
      <td>
        <div className='flex items-center space-x-3'>
          <div className='avatar'>
            {/* <div className='mask  mask-squircle w-12 h-12'>
              <img
                className='object-contain'
                src={img}
                alt='Avatar Tailwind CSS Component'
              />
            </div> */}
          </div>
          <div>
            <div className='font-bold'>{marque}</div>
            <div className='text-sm opacity-50'>{model}</div>
          </div>
        </div>
      </td>
      <td>
        {'transmission'}
        <br />
        <span className='badge badge-ghost badge-sm'>{fuel}</span>
      </td>
      <td> {numStr(price)} FCFA </td>
    </tr>
  );
}

export function ModalAddCar() {
  return (
    <div
      className={clsx(
        'absolute',
        'w-full',
        'bg-opacity-60',
        'flex items-center',
        'justify-center',
        'h-full',
        'bg-black',
        'left-0',
        'top-0 z-50'
      )}>
      <FormAddCar />
    </div>
  );
}

export function FormAddCar() {
  const { dealer, setCarRents, setCarSales, setOpenModal } =
    useContext(contextDealerDashboard);

  const [selectedImage, setSelectedImage] = useState([]);
  const [Image1, setImage1] = useState();
  const [Image2, setImage2] = useState();

  const option = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const Images = [];
    const Form = e.target;
    const Element = Form.elements;
    let formData = new FormData();

    formData.append('file1', Image1);
    formData.append('file2', Image2);

    const { data } = await axios.post('/api/image', formData, option);

    for (let key in data.done) {
      Images.push(data.done[key].newFilename);
    }

    const Data = {
      marque: Element.marque.value,
      model: Element.model.value,
      fuel: Element.fuel.value,
      transmission: Element.transmission.value,
      service: Element.service.value,
      type: Element.types.value,
      year: Element.annee.value,
      price: Element.prix.value,
      constructor: Element.marque.value,
      img: Images,
      door: Element.portieres.value,
      foreign_key_dealer: dealer._id,
    };

    const PostCar = await addCarrs(Data);
    
    if (Element.service.value === 'location') {
      const Car = await get_car_rent(dealer._id);
      setCarRents(Car);
    } else {
      const Car = await get_car_sale(dealer._id);
      setCarSales(Car);
    }
    setSelectedImage([]);
    Form.reset();
    setTimeout(() => setOpenModal(false), 2000);
  };

  const handleClose = () => setOpenModal(false);

  /**
   * * fonction qui récupère les fichiers choisis
   * @param {*} param0
   */
  const selectFiles = ({ target }) => {
    const files = target.files;
    console.log(files);
    if (files) {
      let images = [];
      //   let fileSend = [];
      try {
        for (const key in files) {
          images.push(URL.createObjectURL(files[key]));
        }
      } catch (error) {
        console.log(error.message);
      }
      setSelectedImage(images);
      setImage1(files[0]);
      setImage2(files[1]);
    }
  };

  return (
    <div className=' w-1/2 box-border  p-9 bg-white '>
      <div className='flex justify-around'>
        <div
          className={clsx(
            'w-40',
            'relative',
            'box-border',
            'aspect-video',
            'rounded',
            'flex',
            'items-center',
            'justify-center',
            'border-2',
            'border-dashed',
            'DeleteForever',
            'cursor-pointer'
          )}>
          <div className='flex justify-around'>
            {selectedImage.map((image, i) => (
              <div
                key={i}
                className={clsx(
                  'w-40',
                  'relative',
                  'box-border',
                  'aspect-video',
                  'rounded',
                  'flex',
                  'items-center',
                  'justify-center',
                  'border-2',
                  'border-dashed',
                  'cursor-pointer'
                )}>
                <Image src={image} fill alt='ee' />
              </div>
            ))}
          </div>
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            <input
              type='file'
              multiple
              accept='image/*'
              name='fichiers'
              onChange={selectFiles}
            />
          </label>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='marque'>
              Marque
            </label>
            <input
              className='input input-xs input-accent'
              id='marque'
              type='text'
              name='marque'
            />
          </div>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='model'>
              Model
            </label>
            <input
              className='input input-xs input-accent'
              id='model'
              type='text'
              name='model'
            />
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='types'>
              Types
            </label>
            <input
              className='input input-xs input-accent'
              id='types'
              type='text'
              name='types'
            />
          </div>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='annee'>
              Année
            </label>
            <input
              className='input input-xs input-accent'
              id='annee'
              type='text'
              name='annee'
            />
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='prix'>
              Prix
            </label>
            <input
              className='input input-xs input-accent'
              id='prix'
              type='number'
              name='prix'
            />
          </div>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='portieres'>
              Portières
            </label>
            <input
              className='input input-xs input-accent'
              id='portieres'
              type='text'
              name='portieres'
            />
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='carbur'>
              Carburant
            </label>
            <select className='select-sm ' name='fuel' id='carbur'>
              <optgroup>
                <option value='gasoil'>gasoil</option>
                <option value='essence'>essence</option>
                <option value='élèctrique'>élèctrique</option>
              </optgroup>
            </select>
          </div>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='trans'>
              Transmission
            </label>
            <select
              className='select-sm '
              name='transmission'
              id='trans'>
              <optgroup className=''>
                <option value='manuelle'>manuelle</option>
                <option value='automatique'>automatique</option>
              </optgroup>
            </select>
          </div>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='trans'>
              Service
            </label>
            <select
              name='service'
              className='select-sm '
              id='service'>
              <optgroup>
                <option value='location'>location</option>
                <option value='vente'>vente</option>
              </optgroup>
            </select>
          </div>
        </div>
        <div className='pt-7 flex justify-center gap-x-80 '>
          <input
            className=' btn btn-outline'
            type='submit'
            value='enregistrer'
          />
          <button onClick={handleClose} className='btn btn-outline'>
            Fermer
          </button>
        </div>
      </form>
    </div>
  );
}
