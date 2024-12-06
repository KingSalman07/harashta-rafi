import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonAvatar,
} from '@ionic/react';
import { 
  personCircle, 
  mailOutline, 
  callOutline, 
  documentTextOutline,
  settingsOutline,
  logOutOutline 
} from 'ionicons/icons';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

const Profile: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent>
        <div className="p-4">
          <div className="flex flex-col items-center mb-6">
            <IonAvatar className="w-24 h-24 mb-4">
              <img 
                src={currentUser?.photoURL || 'https://ionicframework.com/docs/img/demos/avatar.svg'} 
                alt="Profile"
              />
            </IonAvatar>
            <h2 className="text-xl font-bold">{currentUser?.displayName || 'User'}</h2>
            <p className="text-gray-600">{currentUser?.email}</p>
          </div>

          <IonList>
            <IonItem button>
              <IonIcon icon={personCircle} slot="start" />
              <IonLabel>Edit Profile</IonLabel>
            </IonItem>

            <IonItem button>
              <IonIcon icon={documentTextOutline} slot="start" />
              <IonLabel>Travel Documents</IonLabel>
            </IonItem>

            <IonItem button>
              <IonIcon icon={settingsOutline} slot="start" />
              <IonLabel>Settings</IonLabel>
            </IonItem>

            <IonItem button onClick={handleLogout} className="mt-4">
              <IonIcon icon={logOutOutline} slot="start" color="danger" />
              <IonLabel color="danger">Logout</IonLabel>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;