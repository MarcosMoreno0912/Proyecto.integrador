

export function validation(userData){
	const { email, password } = userData
	const errors = {};

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
	
	if(!email){
		errors.email = 'El email no puede estar vacío.';
	}else if(!emailRegex.test(email)) {
		errors.email = 'El email no es válido.';
	}else if(email.length > 35) {
		errors.email = 'El email no puedde tener más de 35 caracteres'
	}
	  
	const passwordRegex = /\d/; 
	
	if(!password) {
		errors.password = 'La contraseña no puede estar vacía.'
	}else if(!passwordRegex.test(password)) {
		errors.password = 'La contraseña debe contener al menos un número'
	}else if(password.length < 6 || password.length > 12) {
		errors.password = 'La contraseña debe tener entre 6 y 12 caracteres.'
	}
	  
	  return errors;
}

