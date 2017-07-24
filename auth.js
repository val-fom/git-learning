function authenticate(login, password) {
	if (login === 'login' && password === 'password') {
		return 'Yau are logged in';
	} else {
		return 'Loggin is incorrect';
	}
}