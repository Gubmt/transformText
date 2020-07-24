import React, { useState } from 'react';

import { Container, TextArea, ContainerButton, Button, Title, Description } from './styles';

function Input() {
    const [texto, setTexto] = useState("");

    function toUpper(){
        setTexto(document.getElementById("Texto").value.toUpperCase());
    }

    function toLower(){
        setTexto(document.getElementById("Texto").value.toLowerCase());
    }

    function firstLetterToUpper(){
        let newSentense = "";
        const sentenses = document.getElementById("Texto").value.toLowerCase().trim().split(/\n/);
        sentenses.map( sentense => {
            if(sentense){
                let sentenseVet = sentense.trim().split(" ");
                sentenseVet.map(word => {
                    if(word){
                        newSentense = newSentense.concat(word.replace(word[0], word[0].toUpperCase()), " ");
                        return newSentense;
                    }
                    return null;
                })
                newSentense = newSentense.concat("\r\n");
            }
            return null;
        })
        setTexto(newSentense);
    }

    function firstLetterSentenseToUpper(){
        let newSentense = "";
        const sentenses = document.getElementById("Texto").value.toLowerCase().trim().split(/\n/);
        sentenses.map( sentense => {
            if(sentense){
                newSentense = newSentense.concat(sentense.replace(sentense[0], sentense[0].toUpperCase()));
                newSentense = newSentense.concat("\r\n");
                return newSentense;
            }
            return null;
        })
        setTexto(newSentense);
    }

    function reverse(){     
        let newSentense = "";
        const sentenses = document.getElementById("Texto").value.trim().split(/\n/);
        sentenses.map(sentense => {
            if(sentense){
                newSentense = newSentense.concat(sentense.split('').reverse().join('').trim());
                newSentense = newSentense.concat("\r\n");
                return newSentense;
            }
            return null;
        })
        setTexto(newSentense);
    }

    return (
        <Container>
            <Title>Editor de Texto</Title>
            <Description>Escreva ou cole seu texto abaixo:</Description>
            <TextArea id="Texto" name="Texto" value={texto} onChange={e => setTexto(e.target.value)} ></TextArea>
            <Description>Escolha a opção desejada:</Description>
            <ContainerButton>
                <Button type="button" onClick={() => toUpper() }>MAIÚSCULA</Button>
                <Button type="button" onClick={() => toLower() }>minúscula</Button>
                <Button type="button" onClick={() => firstLetterToUpper() }>Primeira Letra Palavra</Button>
                <Button type="button" onClick={() => firstLetterSentenseToUpper() }>Primeira letra frase</Button>
                <Button type="button" onClick={() => reverse() }>Inverter</Button>
                {/* <Button type="button">Testando botão</Button>
                <Button type="button">Testando botão</Button> */}
            </ContainerButton>
        </Container>  
    )  
}

export default Input;