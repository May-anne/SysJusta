import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonHeader, IonGrid, IonRow, IonCol, IonLabel, IonCardContent, IonCard, IonItem, IonIcon, IonToolbar } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import './Linkou.css'
import ReactInputMask from 'react-input-mask';
import { useLocation, useNavigate } from 'react-router-dom';

const GeneratePaymentLinkPage = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [paymentLink, setPaymentLink] = useState('');

  const {state} = useLocation();
  const navigate = useNavigate();

  const generatePaymentLink = () => {
    // Simula a geração do link de pagamento com base nos valores inseridos
    const paymentLink = `https://www.exemplo.com.br/checkout?amount=${amount}&description=${description}`;
    setPaymentLink(paymentLink);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot='start' fill='clear' onClick={()=>navigate('/signin', {state:{id:state.id, loyalty:state.loyalty}})}>
            <IonIcon icon={arrowBackOutline}></IonIcon>
          </IonButton>
          <div className="register-title">
            <img src = "/logo2.png"></img>
          </div>
          </IonToolbar>
      </IonHeader>

      <IonContent className='linkou-form'>
        <IonGrid className="linkou-section">
          <IonRow>
            <IonCol size="12">
              <h1>Linkou</h1>
              <p>Insira as informações abaixo para gerar um link de pagamento.</p>
              <IonCard>
                <IonCardContent>
                <IonItem>
                <IonLabel position="floating">Valor</IonLabel>
                <IonInput color="medium" value={amount} min="0" clearInput={true} type="number" onIonInput={(e:any) => setAmount(e.detail.value!)}></IonInput>
                </IonItem>
                <IonItem>
                <IonLabel position="floating">Descrição</IonLabel>
                <IonInput color="medium" clearInput={true} type="text" onIonInput={(e:any) => setDescription(e.detail.value!)}></IonInput>
                </IonItem>
                </IonCardContent>
              </IonCard>
        <IonButton id='buttonLINK' onClick={generatePaymentLink}>Gerar link de pagamento</IonButton>
        {paymentLink && (
          <div>
            <p>Aqui está o seu link de pagamento:</p>
            <a href={paymentLink}>{paymentLink}</a>
          </div>
        )}
        </IonCol>
        </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default GeneratePaymentLinkPage;
