import { Box, Button, ButtonText, Center, FormControl, FormControlLabel, FormControlLabelText, HStack, Heading, Input, InputField, Switch, Text } from "@gluestack-ui/themed";
import { useState } from "react";

export default function Main(){
    const [peso, setPeso] = useState("72");
    const [altura,setAltura] = useState("170");
    const [sexo, setSexo] = useState(false);
    const [resultado, setResultado] = useState("");

    const calcularHandle = () => {
        let alturaConvertida = parseInt(altura);
        let result = 0;
        if(sexo){
            result = (62.1*alturaConvertida)-44.7
            //mulher
        }else{
            result = (72.7*alturaConvertida)-58
            //homem
        }

        setResultado(result)
    }
    
    return <Box bg="$primary100" p="$2" h={$1/2} w={300} borderRadius={$md}>
        <Center h={"$full"}>
            <Heading>Peso Ideal</Heading>
                <FormControl>
                    <FormControlLabel>
                        <FormControlLabelText>Peso</FormControlLabelText>
                    </FormControlLabel>
                    <Input w={$full}>
                        <InputField value={peso} onChangeText={setPeso} />
                    </Input>

                    <FormControlLabel>
                        <FormControlLabelText>Altura</FormControlLabelText>
                    </FormControlLabel>
                    <Input w={$full}>
                        <InputField value={altura} onChangeText={setAltura} />
                    </Input>

                    <HStack w={$full} space="md" justifyContent="center" alignItens="center">
                        <FormControlLabelText>Homem</FormControlLabelText>
                        <Switch value={sexo} onValueChange={setSexo} />
                        <FormControlLabelText>Mulher</FormControlLabelText>
                    </HStack>

                    <Button onPress={calcularHandle}>
                        <ButtonText>Calcular</ButtonText>
                    </Button>
                    <Box justifyContent="center" alignItens="center" height={100}>
                        <Text>Resultado: {resultado}</Text>
                    </Box>
                </FormControl>
        </Center>
    </Box>
}