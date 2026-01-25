import React from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import UploadMedia from './UploadeMedia';
import { ScrollFadeIn } from './ScrollFadeIn';

function Ajout() {

  const currencies = [
    {
      value: 'USD',
      label: 'Ngaliema',
    },
    {
      value: 'EUR',
      label: 'Limete',
    },
    {
      value: 'BTC',
      label: 'Kitambo',
    },
    {
      value: 'JPY',
      label: 'Masina',
    },
  ];


  return (
    <div>
      <ScrollFadeIn>
        <h2 className='text-3xl text-center m-20'>Ajout d'informations</h2>
      </ScrollFadeIn>
      {/* <ScrollFadeIn>
        <h3 className="text-black font-bold text-2xl text-center mb-5">Nos partenaires</h3>
      </ScrollFadeIn> */}
      
      <div className='px-5 flex flex-wrap items-center justify-center gap-5'>
        <ScrollFadeIn>
          <TextField
            id="outlined-multiline-flexible"
            label="Nom"
            multiline
            maxRows={4}
            sx={{

              width: 200,
            }}
          />
        </ScrollFadeIn>
        <ScrollFadeIn>
          <TextField
            id="outlined-select-currency"
            select
            label="Commune"
            sx={{

              width: 200,
            }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <TextField
            id="outlined-multiline-flexible"
            label="Quartier"
            multiline
            maxRows={4}
            sx={{

              width: 200,
            }}
          />
        </ScrollFadeIn>
        <ScrollFadeIn>
        <TextField
          id="outlined-multiline-flexible"
          label="Avenue"
          multiline
          maxRows={4}
          sx={{

            width: 200,
          }}
        />
      </ScrollFadeIn>
        <ScrollFadeIn>
          <TextField
            id="outlined-multiline-flexible"
            label="Numéro"
            multiline
            maxRows={4}
            sx={{

              width: 200,
            }}
          />
        </ScrollFadeIn>
        <ScrollFadeIn>
          <UploadMedia />
        </ScrollFadeIn>
      </div>
    </div>
  )
}

export default Ajout;