import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell'; 
import { styled } from '@mui/material/styles'

const CustomTableTitleCell = styled(TableCell)`
  font-size: 18px; 
  color: rgb(255, 115, 0); 
  font-family: Arial, sans-serif; 
`;

const CustomTableTextCell = styled(TableCell)`
  font-size: 18px; 
  color: rgb(255, 255, 255); 
  font-family: Arial, sans-serif; 
`;

function TabelaCursos() {

  const op_nivel = [
    'BASICO',
    'INTERMEDIARIO',
    'AVANÇADO',
    'CONSULTORIA'
  ] 
  
  const op_consultoria = [
    'Ideal para iniciantes acima de 18 anos, com baixa ou nenhuma experiência com armas de fogo. Optando por esporte ou defesa pessoal.',
    'Para atiradores que já possuem um nível de conhecimento elevado de armas curtas. Querendo aprimorar seu aprendizado no emprego de armas portáteis.',
    'Treinamento tático para civil ou forças armadas. Abrangendo destreza, disciplina e técnicas avançadas de armas semi-automáticas e de repetição.',
    'Iniciamos os trâmites no momento do aceite do cliente em adquirir uma arma de fogo, até sua conclusão final. Com seriedade e competência.'
  ] 

  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <CustomTableTitleCell variant="head">{op_nivel[0]}</CustomTableTitleCell>
            <CustomTableTextCell>{op_consultoria[0]}</CustomTableTextCell>
          </TableRow>
          <TableRow>
            <CustomTableTitleCell variant="head">{op_nivel[1]}</CustomTableTitleCell>
            <CustomTableTextCell>{op_consultoria[1]}</CustomTableTextCell>
            </TableRow>
          <TableRow>
            <CustomTableTitleCell variant="head">{op_nivel[2]}</CustomTableTitleCell>
            <CustomTableTextCell>{op_consultoria[2]}</CustomTableTextCell>
            </TableRow>
          <TableRow>
            <CustomTableTitleCell variant="head">{op_nivel[3]}</CustomTableTitleCell>
            <CustomTableTextCell>{op_consultoria[3]}</CustomTableTextCell>
          </TableRow>
        </TableBody>
      </Table>
  </TableContainer>
  );
}

export default TabelaCursos;
