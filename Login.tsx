import { 
  IonContent, 
  IonPage, 
  IonButton, 
  IonItem, 
  IonLabel, 
  IonInput,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonToast
} from '@ionic/react';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const { signInWithGoogle, signInWithEmail } = useAuth();
  const history = useHistory();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmail(email, password);
      history.push('/tabs/home');
    } catch (error: any) {
      setToastMessage(error.message);
      setShowToast(true);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      history.push('/tabs/home');
    } catch (error: any) {
      setToastMessage(error.message);
      setShowToast(true);
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="flex min-h-screen items-center justify-center">
          <IonCard>
            <IonCardHeader>
              <IonCardTitle className="text-center text-2xl font-bold">
                Harashta Rafi Tour
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <IonItem>
                  <IonLabel position="floating">Email</IonLabel>
                  <IonInput
                    type="email"
                    value={email}
                    onIonChange={e => setEmail(e.detail.value!)}
                    required
                  />
                </IonItem>
                
                  <IonLabel position="floating">Password</IonLabel>
                  <IonInput
                    type="password"
                    value={password}
                    onIonChange={e => setPassword(e.detail.value!)}
                    required
                  />
                
                <IonButton expand="block" type="submit" className="mt-4">
                  Login
                </IonButton>
                <IonButton
                  expand="block"
                  onClick={handleGoogleSignIn}
                  color="danger"
                >
                  Sign in with Google
                </IonButton>
                <div className="text-center mt-4">
                  <a href="/register" className="text-primary">
                    Don't have an account? Register here
                  </a>
                </div>
              </form>
            </IonCardContent>
          </IonCard>
        </div>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={3000}
          position="top"
          color="danger"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;