import { Box, Button, ButtonText, Center, FormControl, FormControlLabel, FormControlLabelText, HStack, Heading, Input, InputField, Switch, Text } from "@gluestack-ui/themed";

export default function Main(){
    
    return <Box bg="$primary100" p="$2" h={$1/2} w={300} borderRadius={$md}>
        <Center h={"$full"}>
            <Heading>Peso Ideal</Heading>
                <FormControl>
                    <FormControlLabel>
                        <FormControlLabelText>Altura</FormControlLabelText>
                    </FormControlLabel>
                    <Input w={$full}>
                        <InputField />
                    </Input>

                    <FormControlLabel>
                        <FormControlLabelText>Peso</FormControlLabelText>
                    </FormControlLabel>
                    <Input w={$full}>
                        <InputField />
                    </Input>

                    <HStack w={$full} space="md" justifyContent="center" alignItens="center">
                        <FormControlLabelText>Homem</FormControlLabelText>
                        <Switch />
                        <FormControlLabelText>Mulher</FormControlLabelText>
                    </HStack>

                    <Button>
                        <ButtonText>Calcular</ButtonText>
                    </Button>
                    <Box justifyContent="center" alignItens="center">
                        <Text>Resultado</Text>
                    </Box>
                </FormControl>
        </Center>
    </Box>
}