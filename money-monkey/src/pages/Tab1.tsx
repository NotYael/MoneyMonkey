import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import NavigationBar from '../components/navigation_bar/navigation_bar';
import BankBreakdown from '../components/bank_breakdown/bank_breakdown';
import Bank from '../components/bank/bank';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonFooter>
          <BankBreakdown bankList={[<Bank bankName='Chase' bankColor='green' bankBalance={1000} />, <Bank bankName='Wells Fargo' bankColor='red' bankBalance={1000} />]} />
          <NavigationBar />
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
