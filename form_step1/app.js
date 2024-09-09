const { createApp, ref } = Vue;

createApp({
    setup() {
        const form = ref({
            identificationNumber: '',
            telephone: '',
            securityQuestion: '',
            securityAnswer: '',
            loginMethod: 'email',  // Default value for radio button selection
            termsAccepted: false  // Checkbox value
        });

        const handleSubmit = () => {
            if (!form.value.termsAccepted) {
                alert('You must accept the terms and conditions.');
                return;
            }
            console.log('Registration submitted:', form.value);
        };

        return {
            form,
            handleSubmit,
        };
    },
    template: `
        <div class="background">
            <div class="container">
                <div class="row">
                    <div class="column">
                        <i class="fas fa-id-card icon"></i>
                        <input v-model="form.identificationNumber" type="text" placeholder="Identification Number">
                    </div>
                    <div class="column">
                        <i class="fas fa-phone icon"></i>
                        <input v-model="form.telephone" type="text" placeholder="Telephone">
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <i class="fas fa-question icon"></i>
                        <input v-model="form.securityQuestion" type="text" placeholder="Security Question">
                    </div>
                    <div class="column">
                        <i class="fas fa-key icon"></i>
                        <input v-model="form.securityAnswer" type="text" placeholder="Security Answer">
                    </div>
                </div>
                
                <!-- New div for login method selection -->
                <div class="login-methods">
                    <div class="login-methods-header">LOGIN SETUP MENU</div>
                    <div class="row">
                        <div class="column">
                            <label>
                                <input type="radio" v-model="form.loginMethod" value="email">
                                Activate login via email
                            </label>
                        </div>
                        <div class="column">
                            <label>
                                <input type="radio" v-model="form.loginMethod" value="sms">
                                Activate login via SMS
                            </label>
                        </div>
                        <div class="column">
                            <label>
                                <input type="radio" v-model="form.loginMethod" value="disable">
                                Disable all
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Checkbox for terms and conditions -->
                <div class="checkbox-container">
                    <input type="checkbox" v-model="form.termsAccepted">
                    <label for="terms">I HAVE READ AND ACCEPT THE GENERAL TERMS AND CONDITIONS</label>
                </div>
                
                <button @click="handleSubmit">Register Now</button>
            </div>
        </div>
    `
}).mount('#register-app');
