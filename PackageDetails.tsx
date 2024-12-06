import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/react';
import { calendar, location, people, cash, airplane, bed, restaurant } from 'ionicons/icons';
import { useState } from 'react';
import PaymentMethodSelector from '../components/PaymentMethodSelector';
import { PaymentMethod } from '../types/payment';

const PackageDetails: React.FC = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>('qris');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/home" />
          </IonButtons>
          <IonTitle>Package Details</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <img
          src="https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="Package"
          className="w-full h-64 object-cover"
        />

        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Premium Umrah Package</h1>

          <div className="space-y-4 mb-6">
            <div className="flex items-center">
              <IonIcon icon={calendar} className="mr-2" />
              <span>12 Days</span>
            </div>
            <div className="flex items-center">
              <IonIcon icon={location} className="mr-2" />
              <span>Mecca & Medina</span>
            </div>
            <div className="flex items-center">
              <IonIcon icon={people} className="mr-2" />
              <span>Group of 15-20</span>
            </div>
            <div className="flex items-center">
              <IonIcon icon={cash} className="mr-2" />
              <span className="text-xl font-bold">$3,999</span>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-3">Package Includes</h2>
          <IonList>
            <IonItem>
              <IonIcon icon={airplane} slot="start" />
              <IonLabel>Return Flights</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon icon={bed} slot="start" />
              <IonLabel>Hotel Accommodation</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon icon={restaurant} slot="start" />
              <IonLabel>Full Board Meals</IonLabel>
            </IonItem>
          </IonList>

          {showPayment ? (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-3">Select Payment Method</h2>
              <PaymentMethodSelector
                selectedMethod={selectedPayment}
                onMethodSelect={setSelectedPayment}
              />
              <IonButton expand="block" className="mt-4">
                Proceed to Payment
              </IonButton>
            </div>
          ) : (
            <IonButton expand="block" className="mt-6" onClick={() => setShowPayment(true)}>
              Book Now
            </IonButton>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PackageDetails;