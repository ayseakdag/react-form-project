import React, { useState } from 'react';
import '@popperjs/core';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IMaskInput } from 'react-imask';

let Kocaeli = [
  'Gebze',
  'Gölcük',
  'Kandıra',
  'Karamürsel',
  'Körfez',
  'Derince',
  'Başiskele',
  'Çayırova',
  'Darıca',
  'Dilovası',
  'İzmit',
  'Kartepe',
];
let Aydin = [
  'Nazilli',
  'Söke',
  'Sultanhisar',
  'Yenipazar',
  'Buharkent',
  'İncirliova',
  'Karpuzlu',
  'Köşk',
  'Kuşadası',
  'Didim',
];

let İstanbul = [
  'Eyüp',
  'Fatih',
  'Gaziosmanpaşa',
  'Kadıköy',
  'Kartal',
  'Sarıyer',
  'Silivri',
  'Şile',
  'Şişli',
  'Üsküdar',
  'Zeytinburnu',
];

//dizi içerisinde obje tanımlama
let obj: any = {
  '09': Aydin,
  '41': Kocaeli,
  '34': İstanbul,
};

const ilName: any = { '09': 'Aydın', '41': 'Kocaeli', '34': 'İstanbul' };

export default function ComponentName() {
  const [ad, setAd] = useState('');
  const [soyad, setSoyad] = useState('');
  const [tc, setTc] = useState('');
  const [email, setEmail] = useState('');
  const [dogum, setDogum] = useState('');
  const [adres, setAdres] = useState('');
  const [il, setİl] = useState('');
  const [ilce, setİlce] = useState('');
  const [ilceler, setİlceler] = useState([]);
  const [tablo, setTablo] = useState<any>([]);
  const [cinsiyet, setCinsiyet] = useState('');

  const [hobiler, setHobiler] = useState(['Müzik', 'Resim', 'Spor']);
  const [secilenHobiler, setSecilenHobiler] = useState<any[]>(
    hobiler.map((d) => false)
  );
  const [sayi, setSayi] = useState(0);

  //   const hobiler = ['Müzik', 'Resim', 'Spor'];

  const setHobi = (indeks: number, deger: boolean) => {
    setSecilenHobiler((prev: any) => {
      return prev.map((d: any, i: number) => (i === indeks ? (d = deger) : d));
    });
  };

  const configBlocks = {
    thisInput: {
      mask: Number,
      signed: true, // disallow negative
      padFractionalZeros: false, // if true, then pads zeros at end to the length of scale
      value: '',
      unmask: true, // true|false|'typed'
    },
  };

  React.useEffect(() => {
    setİlceler(obj[il]);
  }, [il]);

  //fonksiyon tanımlama
  function handleSubmit(e: any) {
    e.preventDefault();
    const a = secilenHobiler.map((f, i) => {
      return f && hobiler[i];
    });
    console.log('🚀 ~ file: Form.tsx ~ line 104 ~ handleSubmit ~ a', a);
    const b = a.filter((d) => d);
    console.log('🚀 ~ file: Form.tsx ~ line 106 ~ handleSubmit ~ b', b);

    const hobi = b.join(', ');

    // tablo.push([ad, soyad, email, tc, dogum, il, ilce, adres, cinsiyet, hobi]);

    setTablo((prev: any) => {
      return [
        ...prev,
        [
          sayi,
          ad,
          soyad,
          email,
          tc,
          dogum,
          ilName[il],
          ilce,
          adres,
          cinsiyet,
          hobi,
        ],
      ];
    });

    console.log('tablo', tablo);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className='mb-3 ml-3 p-2 mx-auto' style={{ width: '400px' }}>
        <label htmlFor='ad' className='form-label'>
          Ad
        </label>
        {ad}
        <input
          value={ad}
          onChange={(e) => setAd(e.target.value)}
          type='text'
          className='form-control'
          name='ad'
          placeholder='Adınızı Giriniz'
        />
      </div>

      <div className='mb-3 ml-3 p-2 mx-auto' style={{ width: '400px' }}>
        <label htmlFor='soyad' className='form-label'>
          Soyad
        </label>
        {soyad}
        <input
          value={soyad}
          onChange={(e) => setSoyad(e.target.value)}
          type='text'
          className='form-control'
          name='soyad'
          placeholder='Soyadınızı Giriniz'
        />
      </div>
      {ad}
      <div className='mb-3 ml-3 p-2 mx-auto' style={{ width: '400px' }}>
        <label htmlFor='email' className='form-label'>
          Email Adresi
        </label>
        {email}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          className='form-control'
          aria-describedby='email'
          name='email'
          placeholder='name@example.com'
        />
      </div>
      <div className='mb-3 ml-3 p-2 mx-auto' style={{ width: '400px' }}>
        <label htmlFor='tc kimlik' className='form-label'>
          Tc Kimlik
        </label>
        {tc}
        <IMaskInput
          value={tc}
          onChange={(e) => setTc(e.currentTarget.value)}
          type='text'
          className='form-control'
          name='tc kimlik'
          maxLength={11}
          placeholder='Tc Kimlik No Bilgilerinizi Giriniz'
          blocks={configBlocks}
          mask='thisInput' // enable number mask
          onAccept={
            // depending on prop above first argument is
            // `value` if `unmask=false`,
            // `unmaskedValue` if `unmask=true`,
            // `typedValue` if `unmask='typed'`
            (value, mask) => console.log(value)
          }
          // ...and more mask props in a guide

          // input props also available
        />
        {/*  <input
          type='text'
          className='form-control'
          id='tckimlik'
          name='tckimlik'
          maxLength={11}
          placeholder='tc kimlik'
        /> */}
      </div>
      <div className='mb-3 ml-3 p-2 mx-auto' style={{ width: '400px' }}>
        <label htmlFor='dogum' className='form-label'>
          Doğum Tarihi
        </label>
        {dogum}
        <IMaskInput
          onChange={(e) => {
            console.log('ads', e.currentTarget.value);
            setDogum(e.currentTarget.value);
          }}
          value={dogum}
          type='text'
          className='form-control'
          name='dogum'
          placeholder='__/__/____'
          blocks={configBlocks}
          mask='00{/}00{/}0000' // enable number mask

          // ...and more mask props in a guide

          // input props also available
        />
        {/* <input type='text' className='form-control' id='dogum' name='dogum' /> */}
      </div>
      <div
        className='col-md-6 ml-3 mb-3 p-2 mx-auto'
        style={{ width: '400px' }}>
        <label className='form-label'>İl</label>
        {il}
        <select
          value={il}
          onChange={(e) => setİl(e.target.value)}
          id='il'
          className='form-select form-control'
          name='il'>
          <option>İl seçiniz</option>
          <option value='34'>İstanbul</option>
          <option value='09'>Aydın</option>
          <option value='41'>Kocaeli</option>
        </select>
      </div>
      <div
        className='col-md-6 ml-3 mb-3 p-2 mx-auto'
        style={{ width: '400px' }}>
        <label htmlFor='ilce' className='form-label'>
          İlçe
        </label>
        {ilce}
        <select
          value={ilce}
          onChange={(e) => setİlce(e.target.value)}
          name='ilce'
          className='form-select form-control'
          aria-label='Default select example'>
          {ilceler?.map((d, i) => (
            <option key={`ilceler-${i}`} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
      <div className='mb-3 ml-3 p-2 mx-auto' style={{ width: '400px' }}>
        <label htmlFor='adres' className='form-label'>
          Adres
        </label>
        {adres}
        <input
          value={adres}
          onChange={(e) => setAdres(e.target.value)}
          type='adres'
          className='form-control'
          id='adres'
          name='adres'
          placeholder='adres'
        />
      </div>
      <div className='mb-3 ml-3 p-2 mx-auto' style={{ width: '400px' }}>
        <label htmlFor='cinsiyet' className='form-label'>
          Cinsiyet
        </label>
        {cinsiyet}
        <div className='form-check'>
          <input
            onChange={(e) => setCinsiyet(e.target.value)}
            className='form-check-input'
            type='radio'
            name='cinsiyet'
            value={'kadın'}
          />
          <label className='form-check-label' htmlFor='flexRadioDefault1'>
            {' '}
            Kadın{' '}
          </label>
        </div>

        <div className='form-check'>
          <input
            onChange={(e) => setCinsiyet(e.target.value)}
            className='form-check-input'
            type='radio'
            name='cinsiyet'
            value={'erkek'}
          />
          <label className='form-check-label' htmlFor='flexRadioDefault2'>
            {' '}
            Erkek{' '}
          </label>
        </div>
      </div>

      <div className='mb-3 ml-3 p-2 mx-auto' style={{ width: '400px' }}></div>
      <p>İlgi alanları:</p>

      {hobiler.map((h: any, i) => {
        return (
          <label key={`hobi-${i}`} htmlFor={`c${i}`}>
            <input
              type='checkbox'
              checked={secilenHobiler[i]}
              onChange={(e) => {
                // setMuzik(e.target.checked);
                setHobi(i, e.target.checked);
              }}
              name='alan'
              value='Müzik'
              id={`c${i}`}
            />
            {hobiler[i]}
          </label>
        );
      })}
      <p></p>
      <button
        className='btn btn-primary'
        type='submit'
        onClick={() => setSayi((c) => c + 1)}
        // onClick={(e) => handleSubmit(e)}
      >
        Gönder
      </button>
      <button className='btn btn-danger' id='temizle'>
        Temizle
      </button>

      <div className='mb-3 ml-3 p-2 mx-auto' style={{ width: '400px' }}></div>
      <div className=' form action buttons'></div>
      <table className='table table-striped ' id='List'>
        <thead>
          <tr>
            <th>#</th>
            <th>Ad</th>
            <th>Soyad</th>
            <th>E-mail</th>
            <th>Tc Kimlik No</th>
            <th>Doğum Tarihi</th>
            <th>İl</th>
            <th>İlce</th>
            <th>Adres</th>
            <th>Cinsiyet</th>
            <th>Hobiler</th>
          </tr>
        </thead>

        <tbody>
          {tablo?.map((d: any, i: number) => {
            return (
              <tr key={`tr-${i}`}>
                {d.map((f: any, i1: number) => {
                  return <td key={`td-${i1}`}>{f}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </form>
  );
}
