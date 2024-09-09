const { createApp, ref } = Vue;

createApp({
    setup() {
        const form = ref({
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            rePassword: ''
        });

        // States to toggle password visibility
        const showPassword = ref(false);
        const showRePassword = ref(false);

        // Toggles visibility for password
        const togglePasswordVisibility = () => {
            showPassword.value = !showPassword.value;
        };

        // Toggles visibility for re-enter password
        const toggleRePasswordVisibility = () => {
            showRePassword.value = !showRePassword.value;
        };

        const handleSubmit = () => {
            console.log('Form submitted:', form.value);
        };

        return {
            form,
            showPassword,
            showRePassword,
            togglePasswordVisibility,
            toggleRePasswordVisibility,
            handleSubmit,
        };
    },
    template: `
        <div class="background">
            <div class="container">
                <div class="row">
                    <div class="column">
                        <i class="fas fa-user icon"></i>
                        <input v-model="form.firstName" type="text" placeholder="Your name">
                    </div>
                    <div class="column">
                        <i class="fas fa-user icon"></i>
                        <input v-model="form.lastName" type="text" placeholder="Your surname">
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <i class="fas fa-user-tag icon"></i>
                        <input v-model="form.username" type="text" placeholder="Your username">
                    </div>
                    <div class="column">
                        <i class="fas fa-envelope icon"></i>
                        <input v-model="form.email" type="email" placeholder="E-mail">
                    </div>
                </div>
                <!-- Password field with toggle -->
                <div class="row">
                    <div class="column password-container">
                        <i class="fas fa-lock icon"></i>
                        <input v-model="form.password" :type="showPassword ? 'text' : 'password'" placeholder="Your password">
                        <!-- Toggle between eye and eye-slash SVG -->
                        <img :src="showPassword ? 'assets/eye.svg' : 'assets/eye-slash.svg'" class="password-toggle" @click="togglePasswordVisibility">
                    </div>
                    <div class="column password-container">
                        <i class="fas fa-lock icon"></i>
                        <input v-model="form.rePassword" :type="showRePassword ? 'text' : 'password'" placeholder="Reenter password">
                        <!-- Toggle between eye and eye-slash SVG for re-password field -->
                        <img :src="showRePassword ? 'assets/eye.svg' : 'assets/eye-slash.svg'" class="password-toggle" @click="toggleRePasswordVisibility">
                    </div>
                </div>
                <button @click="handleSubmit">GO TO NEXT STEP</button>
            </div>
        </div>
    `
}).mount('#app');
