export function useFormValidation(form: Ref<any>) {
    const firstNameCheck = (required: boolean = true) =>
        computed(() => {
            if (required && !form.value.firstName) return { valid: false, message: 'Ime je obavezno' }
            if (!required && !form.value.firstName) return { valid: true, message: '' }
            const firstNameCheck = /^[\p{L} ]+$/u
            if (!firstNameCheck.test(form.value.firstName))
                return { valid: false, message: 'Dozvoljena su samo slova' }
            return { valid: true, message: '' }
        })

    const lastNameCheck = (required: boolean = true) =>
        computed(() => {
            if (required && !form.value.lastName) return { valid: false, message: 'Prezime je obavezno' }
            if (!required && !form.value.lastName) return { valid: true, message: '' }
            const lastNameCheck = /^[\p{L} ]+$/u
            if (!lastNameCheck.test(form.value.lastName))
                return { valid: false, message: 'Dozvoljena su samo slova' }
            return { valid: true, message: '' }
        })

    const fullNameCheck = (required: boolean = true) =>
        computed(() => {
            if (required && !form.value.fullname) return { valid: false, message: 'Ime i prezime su obavezni' }
            if (!required && !form.value.fullname) return { valid: true, message: '' }
            const fullnameRegex = /^[\p{L} ]+$/u
            if (!fullnameRegex.test(form.value.fullname))
                return { valid: false, message: 'Dozvoljena su samo slova i razmaci' }
            return { valid: true, message: '' }
        })

    const emailCheck = (required: boolean = true) =>
        computed(() => {
            if (required && !form.value.email) return { valid: false, message: 'Email adresa je obavezna' }
            if (!required && !form.value.email) return { valid: true, message: '' }
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            if (!emailRegex.test(form.value.email)) return { valid: false, message: 'Unesite validnu email adresu' }
            return { valid: true, message: '' }
        })

    const emailLoginCheck = computed(() => {
        if (!form.value.email) return { valid: false, message: 'Korisničko ime je obavezno' }
        return { valid: true, message: '' }
    })

    const commentCheck = computed(() => {
        if (!form.value.comment) return { valid: false, message: 'Komentar je obavezan' }
        return { valid: true, message: '' }
    })

    const phoneCheck = (required: boolean = true) =>
        computed(() => {
            if (required && !form.value.phone) return { valid: false, message: 'Broj telefona je obavezan' }
            if (!required && !form.value.phone) return { valid: true, message: '' }
            const phoneRegex = /^\d{6,15}$/
            const cleanPhone = form.value.phone.replace(/\s+/g, '')
            if (!phoneRegex.test(cleanPhone)) return { valid: false, message: 'Broj telefona treba da ima 6-15 cifara' }
            return { valid: true, message: '' }
        })

    const addressCheck = (required: boolean = true) =>
        computed(() => {
            if (required && !form.value.address) return { valid: false, message: 'Adresa je obavezna' }
            if (!required && !form.value.address) return { valid: true, message: '' }
            const addressRegex = /[a-zA-Z]/
            if (!addressRegex.test(form.value.address)) return { valid: false, message: 'Adresa mora sadržati slova' }
            return { valid: true, message: '' }
        })

    const cityCheck = (required: boolean = true) =>
        computed(() => {
            if (required && !form.value.city) return { valid: false, message: 'Grad je obavezan' }
            if (!required && !form.value.city) return { valid: true, message: '' }
            const cityRegex = /^[\p{L} ]+$/u
            if (!cityRegex.test(form.value.city)) return { valid: false, message: 'Dozvoljena su samo slova i razmaci' }
            return { valid: true, message: '' }
        })

    const zipcodeCheck = (required: boolean = true) =>
        computed(() => {
            if (required && !form.value.zipcode) return { valid: false, message: 'Poštanski broj je obavezan' }
            if (!required && !form.value.zipcode) return { valid: true, message: '' }
            const zipcodeRegex = /^\d{5}$/
            if (!zipcodeRegex.test(form.value.zipcode))
                return { valid: false, message: 'Poštanski broj treba da sadrži 5 cifara' }
            return { valid: true, message: '' }
        })

    const passwordCheck = computed(() => {
        const password = form.value.password
        if (!password) {
            return { valid: false, message: 'Lozinka je obavezna' }
        }

        const digitRegex = /\d/
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/

        if (password.length < 6) {
            return { valid: false, message: 'Lozinka mora imati najmanje 6 karaktera' }
        }

        if (!digitRegex.test(password)) {
            return { valid: false, message: 'Lozinka mora sadržati bar jedan broj' }
        }

        if (!specialCharRegex.test(password)) {
            return { valid: false, message: 'Lozinka mora sadržati bar jedan specijalan karakter' }
        }

        return { valid: true, message: '' }
    })

    const passwordLoginCheck = computed(() => {
        if (!form.value.password) return { valid: false, message: 'Lozinka je obavezna' }
        return { valid: true, message: '' }
    })

    const confirmPasswordCheck = computed(() => {
        if (!form.value.confirmPassword) return { valid: false, message: 'Morate potvrditi lozinku' }
        if (form.value.confirmPassword !== form.value.password)
            return { valid: false, message: 'Lozinke se ne poklapaju' }
        return { valid: true, message: '' }
    })

    const termsAcceptedCheck = computed(() => {
        if (!form.value.termsAccepted) return { valid: false, message: 'Morate prihvatiti uslove korišćenja' }
        return { valid: true, message: '' }
    })

    return {
        firstNameCheck,
        lastNameCheck,
        fullNameCheck,
        emailCheck,
        emailLoginCheck,
        phoneCheck,
        addressCheck,
        cityCheck,
        zipcodeCheck,
        commentCheck,
        passwordCheck,
        passwordLoginCheck,
        confirmPasswordCheck,
        termsAcceptedCheck,
    }
}
