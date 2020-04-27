import React, { useState } from 'react';
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { Switch } from 'react-native';

import { 
  Wrapper, 
  Header, 
  HeaderContainer, 
  Title, 
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBanlanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddButton,
  AddLabel,
  UseTicketContainer,
  UseTicketButton,
  UseTicketLabel,
} from './styles';

import creditCard from '../../images/credit-card.png';

export default function Wallet() {
  const [isVisible, setisVisible] = useState(true);
  const [useBalance, setuseBalance] = useState(true);

  function handleToggleVisibility() {
      setisVisible((prevState) => !prevState);
  }

  function handleToggleUseBalance() {
      setuseBalance((prevState) => !prevState);  
  }

   return(
      <Wrapper>
          <Header 
            colors={
              useBalance 
              ? ['#52E78C', '#1AB563'] 
              : ['#D3D3D3', '#868686']
            }
          >
            <HeaderContainer>
               <Title>Saldo PicPay</Title>

               <BalanceContainer>
                   <Value>
                      R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
                   </Value>

                   <EyeButton onPress={handleToggleVisibility}>
                      <Feather name={isVisible ? 'eye' : 'eye-off'} size={22} color="#FFF" />
                   </EyeButton>
               </BalanceContainer>

               <Info>
                   Seu Saldo está rendendo 100% do CDI
               </Info>

               <Actions>
                   <Action>
                     <MaterialCommunityIcons name="cash" size={26} color="#FFF" />
                     <ActionLabel>Adicionar</ActionLabel>
                   </Action>

                   <Action>
                     <FontAwesome name="bank" size={20} color="#FFF" />
                     <ActionLabel>Retirar</ActionLabel>
                   </Action>
               </Actions>
            </HeaderContainer>
          </Header>

          <UseBalance>
            <UseBanlanceTitle>Usar saldo ao pagar</UseBanlanceTitle>
            <Switch value={useBalance} onValueChange={handleToggleUseBalance} />
          </UseBalance>

          <PaymentMethods>
              <PaymentMethodsTitle>Formas de pagamento</PaymentMethodsTitle>

              <Card>
                <CardBody>
                    <CardDetails>
                    <CardTitle>Cadastre seu cartão de crédito</CardTitle>
                    <CardInfo>
                        Cadastre um cartão de crédito para poder fazer pagamentos memso quando
                        não tiver saldo no seu PicPay.
                    </CardInfo>
                    </CardDetails>

                    <Img source={creditCard} resizeMode="contain" />
                </CardBody>

                <AddButton>
                    <AntDesign name="pluscircleo" size={30} color="#0DB060" />
                    <AddLabel>Adiconar cartão de crédito</AddLabel>
                </AddButton>
              </Card>

              <UseTicketContainer>
                <UseTicketButton>
                    <MaterialCommunityIcons name="ticket-outline" size={20} color="#0BD060" />
                    <UseTicketLabel>Usar código promocional</UseTicketLabel>
                </UseTicketButton>
              </UseTicketContainer>
          </PaymentMethods>
      </Wrapper>
   );
}