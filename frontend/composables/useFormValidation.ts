export function useFormValidation(form: Ref<any>) {
    const firstNameCheck = computed(() => {
        const firstNameCheck = /^[\p{L} ]+$/u
        if (!form.value.firstName) return { valid: false, message: 'Ime je obavezno' }
        if (!firstNameCheck.test(form.value.firstName))
            return { valid: false, message: 'Dozvoljena su samo slova i razmaci' }
        return { valid: true, message: '' }
    })

    const lastNameCheck = computed(() => {
        const lastNameCheck = /^[\p{L} ]+$/u
        if (!form.value.lastName) return { valid: false, message: 'Prezime je obavezno' }
        if (!lastNameCheck.test(form.value.lastName))
            return { valid: false, message: 'Dozvoljena su samo slova i razmaci' }
        return { valid: true, message: '' }
    })

    const fullNameCheck = computed(() => {
        const fullnameRegex = /^[\p{L} ]+$/u
        if (!form.value.fullname) return { valid: false, message: 'Ime i prezime su obavezni' }
        if (!fullnameRegex.test(form.value.fullname))
            return { valid: false, message: 'Dozvoljena su samo slova i razmaci' }
        return { valid: true, message: '' }
    })

    const emailCheck = computed(() => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!form.value.email) return { valid: false, message: 'Email adresa je obavezna' }
        if (!emailRegex.test(form.value.email)) return { valid: false, message: 'Unesite validnu email adresu' }
        return { valid: true, message: '' }
    })

    const phoneCheck = computed(() => {
        if (!form.value.phone) return { valid: false, message: 'Broj telefona je obavezan' }
        const phoneRegex = /^\d{6,15}$/
        const cleanPhone = form.value.phone.replace(/\s+/g, '')
        if (!phoneRegex.test(cleanPhone)) return { valid: false, message: 'Broj telefona treba da ima 6-15 cifara' }
        return { valid: true, message: '' }
    })

    const addressCheck = computed(() => {
        if (!form.value.address) return { valid: false, message: 'Adresa je obavezna' }
        return { valid: true, message: '' }
    })

    const cityCheck = computed(() => {
        const cityRegex = /^[\p{L} ]+$/u
        if (!form.value.city) return { valid: false, message: 'Grad je obavezan' }
        if (!cityRegex.test(form.value.city)) return { valid: false, message: 'Dozvoljena su samo slova i razmaci' }
        return { valid: true, message: '' }
    })

    const zipcodeCheck = computed(() => {
        const zipcodeRegex = /^\d{5}$/
        if (!form.value.zipcode) return { valid: false, message: 'Poštanski broj je obavezan' }
        if (!zipcodeRegex.test(form.value.zipcode))
            return { valid: false, message: 'Poštanski broj treba da sadrži 5 cifara' }
        return { valid: true, message: '' }
    })

    const passwordCheck = computed(() => {
        const password = form.value.password
        if (!password) {
            return { valid: false, message: 'Lozinka je obavezna' }
        }

        if (password.length < 6) {
            return { valid: false, message: 'Lozinka mora imati najmanje 6 karaktera' }
        }

        if (!/\d/.test(password)) {
            return { valid: false, message: 'Lozinka mora sadržati bar jedan broj' }
        }

        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return { valid: false, message: 'Lozinka mora sadržati bar jedan specijalan karakter' }
        }

        return { valid: true, message: '' }
    })

    const confirmPasswordCheck = computed(() => {
        if (!form.value.confirmPassword) return { valid: false, message: 'Morate potvrditi lozinku' }
        if (form.value.confirmPassword !== form.value.password)
            return { valid: false, message: 'Lozinke se ne poklapaju' }
        return { valid: true, message: '' }
    })

    const agreeToTermsCheck = computed(() => {
        if (!form.value.agreeToTerms) return { valid: false, message: 'Morate prihvatiti uslove korišćenja' }
        return { valid: true, message: '' }
    })

    return {
        firstNameCheck,
        lastNameCheck,
        fullNameCheck,
        emailCheck,
        phoneCheck,
        addressCheck,
        cityCheck,
        zipcodeCheck,
        passwordCheck,
        confirmPasswordCheck,
        agreeToTermsCheck,
    }
}
