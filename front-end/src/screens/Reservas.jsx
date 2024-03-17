import React, { useState } from 'react'
import NavBar from '../componentes/NavBar'
import Footer from '../componentes/Footer'
import style from '../css/Styles.module.css'
import ilustracion from '../images/imagen.png'


function Reservas() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

  const handleSelectChange = (e) => {
    setOpcionSeleccionada(e.target.value);
  }

  {
    const [mesSeleccionada, setMesSeleccionada] = useState('');

    const handleSelectChanged = (e) => {
      setMesSeleccionada(e.target.value);
    }

    {
      const [diaSeleccionada, setDiaSeleccionada] = useState('');

      const handleSelectChangede = (e) => {
        setDiaSeleccionada(e.target.value);
      }

      {
        const [horaSeleccionada, setHoraSeleccionada] = useState('');

        const handleSelectHora = (e) => {
          setHoraSeleccionada(e.target.value);
        }

        {
          const [minSeleccionada, setMinSeleccionada] = useState('');

          const handleSelectMin = (e) => {
            setMinSeleccionada(e.target.value);
          }

          return (
            <>
              <NavBar />
              <div className={style.reserva}>
                <h1>Qué tipo de reserva quieres?</h1>
                <div className={style.prefieres}>
                  <img src={ilustracion} alt="" />
                  <div className={style.inputs}>
                    <div className={style.corte}>
                      <label htmlFor="cortes">Selecciona tu corte:</label>
                      <select id='cortes' value={opcionSeleccionada} onChange={handleSelectChange}>
                        <option value="Corte de pelo">Corte de pelo</option>
                        <option value="Corte de barba">Corte de barba</option>
                        <option value="Corte de pelo y barba">Corte de pelo y barba</option>
                        <option value="Arreglo de cejas">Arreglo de cejas</option>
                      </select>
                      <p>Opción seleccionada: {opcionSeleccionada}</p>
                    </div>

                    <div className={style.meses}>
                      <label htmlFor="meses">Selecciona el mes:</label>
                      <select id='meses' value={mesSeleccionada} onChange={handleSelectChanged}>
                        <option value="Enero">Enero</option>
                        <option value="Febrero">Febrero</option>
                        <option value="Marzo">Marzo</option>
                        <option value="Abril">Abril</option>
                        <option value="Mayo">Mayo</option>
                        <option value="Junio">Junio</option>
                        <option value="Julio">Julio</option>
                        <option value="Agosto">Agosto</option>
                        <option value="Septiembre">Septiembre</option>
                        <option value="Octubre">Octubre</option>
                        <option value="Noviembre">Noviembre</option>
                        <option value="Diciembre">Diciembre</option>
                      </select>
                      <p>Opción seleccionada: {mesSeleccionada}</p>
                    </div>

                    <div className={style.dia}>
                      <label htmlFor="dia">Selecciona el dia:</label>
                      <select id='dia' value={diaSeleccionada} onChange={handleSelectChangede}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                      </select>
                      <p>Opción seleccionada: {diaSeleccionada}</p>
                    </div>

                    <div className={style.hora}>
                      <label htmlFor="horas">Selecciona la hora:</label>
                      <select id='horas' value={horaSeleccionada} onChange={handleSelectHora}>
                        <option value="8am">8am</option>
                        <option value="9am">9am</option>
                        <option value="10am">10am</option>
                        <option value="11am">11am</option>
                        <option value="12am">12am</option>
                        <option value="13pm">13pm</option>
                        <option value="14pm">14pm</option>
                        <option value="15pm">15pm</option>
                        <option value="16pm">16pm</option>
                        <option value="17pm">17pm</option>
                        <option value="18pm">18pm</option>
                        <option value="19pm">19pm</option>
                        <option value="20pm">20pm</option>
                        <option value="21pm">21pm</option>
                      </select>
                      <p>Opción seleccionada: {horaSeleccionada}</p>
                    </div>

                    <div className={style.min}>
                      <label htmlFor="mins">Selecciona los minutos:</label>
                      <select id='mins' value={minSeleccionada} onChange={handleSelectMin}>
                        <option value="00">00</option>
                        <option value="15">15</option>
                        <option value="30">30</option>
                        <option value="45">45</option>
                      </select>
                      <p>Opción seleccionada: {minSeleccionada}</p>
                    </div>

                  </div>
                  <button>Reservar</button>
                </div>
              </div>
              <Footer />
            </>
          )
        }
      }
    }
  }
}

export default Reservas

