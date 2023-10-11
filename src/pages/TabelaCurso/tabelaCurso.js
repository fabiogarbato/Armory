import Menubar from '../Menubar/menubar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import './tabelaCurso.css';
import Button from 'react-bootstrap/Button';

function TabelaCurso() {
  return (
    <div>
      <Menubar />
        <Table bordered className='custom-bordered'>
            <thead>
                <tr>
                <th>NÍVEL</th>
                <th>DESCRIÇÃO</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>BÁSICO
                </td>
                <td>Ideal para iniciantes acima de 18 anos, com baixa ou nenhuma experiência com armas de fogo. Optando por esporte ou defesa pessoal.</td>
                </tr>

                <tr>
                <td>INTERMEDIÁRIO</td>
                <td>Para atiradores que já possuem um nível de conhecimento elevado de armas curtas. Querendo aprimorar seu aprendizado no emprego de armas portáteis.</td>
                </tr>

                <tr>
                <td>AVANÇADO</td>
                <td>Treinamento tático para civil ou forças armadas. Abrangendo destreza, disciplina e técnicas avançadas de armas semi-automáticas e de repetição.</td>
                </tr>

                <tr>
                <td>CONSULTORIA</td>
                <td>Iniciamos os trâmites no momento do aceite do cliente em adquirir uma arma de fogo, até sua conclusão final. Com seriedade e competência.</td>
                </tr>
            </tbody>
        </Table>
        <Button className='button-table'>Faça uma cotação conosco</Button>
    </div>
  );
}


export default TabelaCurso;
