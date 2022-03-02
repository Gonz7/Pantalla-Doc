import { Container, Row, Col, Table, FormText, Label, Input, FormGroup } from 'reactstrap'
import './App.css'
import { useState } from "react"
import { titulos } from './columnas'

function App() {
  const [citaState, setCitaState] = useState("")
  const [doctorState, setDoctorState] = useState("")

  return (



    < div className="App" >
      <Container >
        <Row x="4 ">
          <Col className="bg-primary border">Tipo</Col>
          <Col className="bg-primary border">Fecha</Col>
          <Col className="bg-primary border">Doct@r</Col>
        </Row>
        <Row x="4 ">
          <Col className="bg-primary border">
            <div className='container p-1'>
              <select className='custom-select' value={citaState} onChange={(e) => {
                const selectedCita = e.target.value;
                setCitaState(selectedCita)

              }}>
                <option value="cita1">cita1</option>
                <option value="cita2">cita2</option>
                <option value="cita3">cita3</option>
                <option value="cita4">cita4</option>
                <option value="cita5">cita5</option>
                <option value="cita6">cita6</option>
                <option value="cita7">cita7</option>

              </select>
            </div>

          </Col>
          <Col className="bg-primary border"><input type="date" name="fecha" id="" /></Col>
          <Col className="bg-primary border">
            <div className='container p-1' >
              <select className='custom-select' value={doctorState} placeholder="Asignar Doct@r"
                onChange={(e) => {
                  const selectedDoctor = e.target.value;
                  setDoctorState(selectedDoctor)
                }}>
                <option value="doctor1">doctor1</option>
                <option value="doctor2">doctor2</option>
                <option value="doctor3">doctor3</option>
                <option value="doctor4">doctor4</option>
                <option value="doctor5">doctor5</option>



              </select>
            </div>
          </Col>

          <Table bordered>
            <thead>
              <tr >
                {titulos.map(titulo => (
                  <th>{titulo}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"> 8:00 am</th>
                <td> --- </td>
                <td>---- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>

              </tr>
              <tr>
                <th scope="row"> 8:00 am</th>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
              </tr>
              <tr>
                <th scope="row"> 8:00 am</th>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
              </tr>
              <tr>
                <th scope="row"> 8:00 am</th>
                <td> --- </td>
                <td>---- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
              </tr>
              <tr>
                <th scope="row"> 8:00 am</th>
                <td> --- </td>
                <td>---- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
              </tr>
              <tr>
                <th scope="row"> 8:00 am</th>
                <td> --- </td>
                <td>---- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
              </tr>
              <tr>
                <th scope="row"> 8:00 am</th>
                <td> --- </td>
                <td>---- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>

              </tr><tr>
                <th scope="row"> 8:00 am</th>
                <td> --- </td>
                <td>---- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
              </tr>
              <tr>
                <th scope="row"> 8:00 am</th>
                <td> --- </td>
                <td>---- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
              </tr>
              <tr>
                <th scope="row"> 8:00 am</th>
                <td> --- </td>
                <td>---- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
              </tr>
              <tr>
                <th scope="row"> 8:00 am</th>
                <td> --- </td>
                <td>---- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
              </tr>
              <tr>
                <th scope="row"> 8:00 am</th>
                <td> --- </td>
                <td>---- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
              </tr>
              <tr>
                <th scope="row"> 8:00 am</th>
                <td> --- </td>
                <td>---- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
              </tr>
              <tr>
                <th > 8:00 am</th>
                <td> --- </td>
                <td>---- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
              </tr>
              <tr>
                <th > 8:00 am</th>
                <td> --- </td>
                <td>---- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
              </tr>
              <tr>
                <th > 8:00 am</th>
                <td> --- </td>
                <td>---- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
              </tr>
              <tr>
                <th > 8:00 am</th>
                <td> --- </td>
                <td>---- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
              </tr>
              <tr>
                <th > 8:00 am</th>
                <td> --- </td>
                <td>---- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
              </tr>
              <tr>
                <th > 8:00 am</th>
                <td> --- </td>
                <td>---- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
              </tr>
              <tr>
                <th > 8:00 am</th>
                <td> --- </td>
                <td>---- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
              </tr>
              <tr>
                <th > 8:00 am</th>
                <td> --- </td>
                <td>---- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
                <td> -- </td>
              </tr>
              {/* <FormGroup>
                <Label for="exampleFile">
                  File
                </Label>
                <Input
                  id="exampleFile"
                  name="file"
                  type="file"
                />
                <FormText>
                  This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.
                </FormText>
              </FormGroup> */}


            </tbody>
          </Table>
        </Row>
      </Container>


    </div >
  )
}

export default App
