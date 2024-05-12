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
	<div class="flex flex-row gap-3 items-center justify-center">
	<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M9 12l2 2l4 -4" />
</svg>
    <h1 class="text-2xl font-bold">¡Registro envíado!</h1>
	</div>
    <p class="font-bold">Nombre: ${name.value}</p>
    <p class="font-bold">Correo eléctronico: ${email.value}</p>
  `;
}

form.addEventListener("submit", handleSubmit);
