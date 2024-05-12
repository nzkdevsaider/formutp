import "./index.css";

const form = document.getElementById("form") as HTMLFormElement;

function handleSubmit(event: Event) {
	event.preventDefault();
	const target = event.target as HTMLFormElement;
	const name = target.elements.namedItem("name") as HTMLInputElement;
	const email = target.elements.namedItem("email") as HTMLInputElement;
	const password = target.elements.namedItem("password") as HTMLInputElement;
	const confirmPassword = target.elements.namedItem(
		"confirmpassword",
	) as HTMLInputElement;

	if (password.value !== confirmPassword.value) {
		alert("La contraseña no coincide.");
		return;
	}

	form.innerHTML = `
    <h1 class="text-2xl font-bold">¡Registro envíado!</h1>
    <p class="font-bold">Nombre: ${name.value}</p>
    <p class="font-bold">Correo eléctronico: ${email.value}</p>
  `;
}

form.addEventListener("submit", handleSubmit);
