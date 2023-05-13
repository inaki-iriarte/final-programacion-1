'use strict';

/*
 *	IRIARTE, IÑAKI
 */

let aProductos = [
	{
		nombre: 'Hongos',
		imagen: 'Hongos.webp',
		descripcion1: 'Kit de autocultivo de hongos 100% orgánico con todo lo necesario incluido',
		descripcion2: 'Nuestro kit de autocultivo orgánico es la forma más fácil de cultivar tus propios hongos orgánicos y gourmet en casa! Simplemente ábralo, rocíe diariamente con el atomizador incluido y en 10 días estará cosechando sus propios champiñones nada más sacarlos de la caja! El regalo navideño perfecto para amigos y familiares amantes de la comida, amantes de la jardinería y conscientes del medio ambiente.',
		precio: 20,
		id: 1,
	},
	{
		nombre: 'Girasol',
		imagen: 'Girasol.webp',
		descripcion1: 'Kit de autocultivo de girasol 100% orgánico con todo lo necesario incluido',
		descripcion2: 'Ilumina tu hogar con las hermosas flores de mini girasoles de cosecha propia en esta elegante maceta de tarro de albañil. Esta variedad de girasol enano de crecimiento rápido es perfecta para el cultivo en interiores y colocarlo en tu ventana.',
		precio: 25,
		id: 2,
	},
	{
		nombre: 'Jardín de agua',
		imagen: 'Acuatico.webp',
		descripcion1: 'Kit duo que permite crear un ecosistema hidropónico o acuapónico según desee',
		descripcion2: 'Con su jardín de agua puede elegir entre un sistema hidropónico o acuapónico. La hidroponía creará una maceta elegante, de bajo mantenimiento y autorriego. Si elige agregar un pez a su jardín acuático, ¡podrá experimentar la magia de la acuaponia! Su jardín se convierte en una pecera autolimpiante que también cultiva alimentos frescos en la parte superior.',
		precio: 100,
		id: 3,
	},
	{
		nombre: 'Tomate',
		imagen: 'Tomate.webp',
		descripcion1: 'Kit de autocultivo de tomates cherry 100% orgánicos con todo lo necesario incluido',
		descripcion2: '¿No tienes un gran patio? ¡No hay problema! Encontramos la combinación perfecta que lo ayude a cultivar tomates jugosos justo en su ventana! Y el tarro de vidrio no solo se ve genial en su hogar, sino que también elimina la preocupación de regar: ¡podrá ver exactamente cuándo necesita regar! Pruebe la diferencia con sus tomates frescos de cosecha propia en ensaladas, pastas, sándwiches y más.',
		precio: 25,
		id: 4,
	},
	{
		nombre: 'Ají picante',
		imagen: 'Ají.webp',
		descripcion1: 'Kit de autocultivo de ajíes 100% orgánicos con todo lo necesario incluido',
		descripcion2: '¿No tienes un gran patio? ¡No hay problema! Encontramos la combinación perfecta que lo ayude a cultivar ajíes justo en su ventana! Y el tarro de vidrio no solo se ve genial en su hogar, sino que también elimina la preocupación de regar: ¡podrá ver exactamente cuándo necesita regar! Pruebe la diferencia con sus pimientos frescos de cosecha propia en ensaladas, pastas, sándwiches y más.',
		precio: 20,
		id: 5,
	},
	{
		nombre: 'Lavanda',
		imagen: 'Lavanda.webp',
		descripcion1: 'Kit de autocultivo de lavanda 100% orgánico con todo lo necesario incluido',
		descripcion2: '¿Quién tiene la casa que mejor huele en la cuadra? Puedes ser tú con nuestra maceta de lavanda para ventana. La maceta de lavanda Back to the Roots es el regalo perfecto para las fiestas y la forma más fácil de cultivar su lavanda orgánica en interiores y en casa para obtener aromas embriagadores, hermosos colores y un sinfín de usos domésticos.',
		precio: 25,
		id: 6,
	},
];

//Document
const d = document;

//Variables
let productos = d.querySelector('#productos');
let carrito = d.querySelector('#minicarrito');

//Carrito
let oCarrito = {
	productosIds: [],
	cantidades: [],
	subtotal: [],
	totalPrecio: 0,
	totalCantidades: 0,
};

//Objeto carrito en localStorage
if (localStorage.oCarrito) {
	//Si existe el carrito, se lee del localStorage
	oCarrito = JSON.parse(localStorage.oCarrito);
} else {
	//Si no existe, se crea en el localStorage
	localStorage.oCarrito = JSON.stringify(oCarrito);
}

//Armado inicial del carrito
//Elementos
let p1 = d.createElement('p');
let p2 = d.createElement('p');
let span1 = d.createElement('span');
let span2 = d.createElement('span');
let button = d.createElement('button');
//Contenido de cada elemento
span1.innerHTML = '0';
span1.className = 'items';
p1.innerHTML = ' ítems agregados';
span2.innerHTML = '0';
span2.className = 'total';
p2.innerHTML = ' es el total';
button.innerHTML = 'Ver carrito';
//Append de los span a los p, y de los p y button al carrito para que se muestren
p1.prepend(span1);
p2.prepend(span2);
carrito.append(p1, p2, button);

//Función para actualizar los items y total del carrito
const actualizarCarrito = () => {
	let items = d.querySelector('.items');
	let total = d.querySelector('.total');
	//innerHTML de la cantidad total de productos y valor total pasan a valer lo que esté guardado en el objeto
	items.innerHTML = `${oCarrito.totalCantidades}`;
	total.innerHTML = `$ ${oCarrito.totalPrecio}`;
};

//Se actualiza el carrito para cargar los datos almacenados en localStorage si hubiese
actualizarCarrito();

//Catálogo de productos
//Recorrida del array que contiene los productos para ir creando cada uno con sus elementos HTML
for (let producto in aProductos){
	//Variables que crean los elementos
	let divPadre = d.createElement('div');
	let divHijo = d.createElement('div');
	let img = d.createElement('img');
	let h3 = d.createElement('h3');
	let p = d.createElement('p');
	let pDesc = d.createElement('p');
	let span = d.createElement('span');
	let buttonAgregar = d.createElement('button');
	let buttonAmpliar = d.createElement('button');
	//Se agrega el contenido de cada elemento con innerHTML
	h3.innerHTML = `${aProductos[producto]['nombre']}`;
	p.innerHTML = 'Precio: $';
	pDesc.innerHTML = `${aProductos[producto]['descripcion1']}`
	pDesc.className = 'descripcion';
	span.innerHTML = `${aProductos[producto]['precio']}`;
	buttonAgregar.innerHTML = 'Agregar';
	buttonAgregar.className = 'agregar';
	buttonAgregar.dataset.id = `${aProductos[producto]['id']}`;
	buttonAgregar.dataset.valor = `${aProductos[producto]['precio']}`;
	buttonAmpliar.innerHTML = 'Detalles';
	buttonAmpliar.setAttribute('class', 'ampliar');
	//Se define el src y alt de la imagen
	img.src = `assets/${aProductos[producto]['imagen']}`;
	img.alt = `${aProductos[producto]['nombre']}`;
	//Agregamos el span como hijo al elemento p
	p.appendChild(span);
	//Agregamos todos los elementos hijos al div
	divHijo.appendChild(h3);
	divHijo.appendChild(pDesc);
	divHijo.appendChild(p);
	divHijo.appendChild(buttonAgregar);
	divHijo.appendChild(buttonAmpliar);
	//Agregamos la imagen al div padre y su div hijo que contendrá los demás elementos
	divPadre.appendChild(img);
	divPadre.appendChild(divHijo);
	//Agregamos como hijo al div que contendrá la información del producto, dentro del div con id #productos
	productos.appendChild(divPadre);
}

//Agregar al carrito
//Búsqueda de los botones para agregar
let btnAgregar = d.querySelectorAll('.agregar');

//Función para sumar los productos al objeto oCarrito según su id (data-id) y precio (data-valor)
const agregarCarrito = (e) => {
	let id = parseInt(e.target.dataset.id);
	let valor = parseInt(e.target.dataset.valor);
	//Verificación para ver si ya existe el producto
	let indiceId = oCarrito.productosIds.indexOf(id);
	if (indiceId != -1) {
		//Si existe se actualiza el índice de las cantidades, el índice del subtotal de ese producto y el total de cantidad de productos agregados
		oCarrito.cantidades[indiceId]++;
		oCarrito.totalCantidades++;
		oCarrito.subtotal[indiceId] = parseInt(oCarrito.subtotal[indiceId]) + valor;
	} else {
		//Si no existe se crea el índice en productosIds, cantidades y subtotal, además de actualizar el total de cantidades
		oCarrito.productosIds.push(id);
		oCarrito.cantidades.push(1);
		oCarrito.totalCantidades++;
		oCarrito.subtotal.push(valor);
	}
	//Se actualiza el precio total de la compra
	oCarrito.totalPrecio = parseInt(oCarrito.totalPrecio) + valor;
	//Se actualiza el carrito en el localStorage
	localStorage.oCarrito = JSON.stringify(oCarrito);
	//Se actualiza la muestra del carrito
	actualizarCarrito();
};

//Recorrida de cada button que permite agregar al carrito, con un escuchador de evento para que al hacerle click se ejecute la función que suma el producto
for (let btn of btnAgregar) {
	btn.addEventListener('click', agregarCarrito);
};

//Función para quitar los productos del objeto oCarrito según su id (data-id) y su precio (data-valor)
const quitarCarrito = (e) => {
	let id = parseInt(e.target.dataset.id);
	let valor = parseInt(e.target.dataset.valor);
	//Verificación para ver si ya existe el producto
	let indiceId = oCarrito.productosIds.indexOf(id);
	if (indiceId != -1) {
		//Verificación para saber si llegó a cero
		if (oCarrito.cantidades[indiceId] > 0) {
			//Si ya existe se actualiza el índice de las cantidades, el índice del subtotal, el total de cantidades y el precio total
			oCarrito.cantidades[indiceId]--;
			oCarrito.totalCantidades--;
			oCarrito.subtotal[indiceId] = parseInt(oCarrito.subtotal[indiceId]) - valor;
			oCarrito.totalPrecio = parseInt(oCarrito.totalPrecio) - valor;
		}
	}
	//Se actualiza el carrito en el localStorage
	localStorage.oCarrito = JSON.stringify(oCarrito);
	//Se actualiza la muestra del carrito
	actualizarCarrito();
};

//Modal detalle del carrito
let btnCarrito = d.querySelector('#minicarrito > button');
//Escuchador de eventos para el button "Ver carrito"
btnCarrito.addEventListener('click', (e) => {
	//Elementos iniciales modal
	let div = d.createElement('div');
	div.id = 'modalCarrito';
	div.className = 'modal';
	let div1 = d.createElement('div');
	div1.className = 'carritoContainer';
	let a = d.createElement('a');
	a.id = 'carritoCerrar';
	a.href = 'javascript:void(0)';
	a.innerHTML = 'X';
	a.addEventListener('click', (e) => {
		d.querySelector('#modalCarrito').remove();
		return false;
	});
	let div2 = d.createElement('div');
	//Elemento con mensaje para mostrar cuando no hay productos en el
	let msjVacio = d.createElement('p');
	msjVacio.innerHTML = 'No hay productos en el carrito';
	msjVacio.id = 'msjCarrito';
	div2.append(msjVacio);
	//Append del a y div2 a div1, y del div1 al div
	div1.append(a, div2);
	div.appendChild(div1);
	
	//Elementos para los productos
	for (let id in oCarrito.productosIds){
		//Se elimina el mensaje si hay productos
		msjVacio.remove();
		//Creación de cada div que contendra cada producto que se muestre en el carrito
		let div3 = d.createElement('div');
		div3.className = 'producto';
		let pProducto = d.createElement('p');
		pProducto.className = 'nombreProducto';
		//Botones para sumar y restar cantidades de cada producto
		let btnRestar = d.createElement('button');
		btnRestar.innerHTML = '-';
		btnRestar.id = 'restarItem';
		let btnSumar = d.createElement('button');
		btnSumar.innerHTML = '+';
		btnSumar.id = 'sumarItem';
		let div4 = d.createElement('div');
		//p que va a mostrar las cantidades de cada producto
		let pCantidad = d.createElement('p');
		pCantidad.innerHTML = 'Cantidad: ';
		let sCantidad = d.createElement('span');
		sCantidad.className = 'contCantidad';
		//p que va a mostrar el subtotal para cada producto
		let pValor = d.createElement('p');
		pValor.className = 'precioCarrito';
		pValor.innerHTML = '$ ';
		let sValor = d.createElement('span');
		sValor.className = 'subtotal';
		//Botón para eliminar cada producto del carrito
		let btnEliminar = d.createElement('button');
		btnEliminar.id = 'quitarItem';
		//Función para poder actualizar las cantidades y subtotal que se muestran en el modal
		const actualizarModal = () =>{
			sCantidad.innerHTML = `${oCarrito.cantidades[id]}`;
			sValor.innerHTML = `${oCarrito.subtotal[id]}`;
		}
		//Se ejecuta la función para mostrar las cantidades y subtotales iniciales
		actualizarModal();
		//Verificación para deshabilitar el botón que permite restar unidades del producto, en caso de que solo haya 1 unidad en el carrito del producto, no se puede restar otra unidad (pero se puede quitar el producto del carrito con otro boton)
		if (oCarrito.cantidades[id] == 1){
			btnRestar.disabled = true;
			btnRestar.style.cssText = 'background-color: grey; cursor: default;'
		}
		//Recorrido del array con los productos, para comparar los ids y así poder asignarle el nombre acorde a cada producto que se muestra en el modal
		for (let producto in aProductos){
			if (oCarrito.productosIds[id] == aProductos[producto]['id']) {
				pProducto.innerHTML = `Kit ${aProductos[producto]['nombre']}`;
				//Se le asigna el id y valor de dicho producto a sus botones para agregar y restar cantidades
				btnSumar.dataset.id = `${aProductos[producto]['id']}`;
				btnSumar.dataset.valor = `${aProductos[producto]['precio']}`;
				btnRestar.dataset.id = `${aProductos[producto]['id']}`;
				btnRestar.dataset.valor = `${aProductos[producto]['precio']}`;
				//Se le asigna el id al boton para eliminar el producto del carrito
				btnEliminar.dataset.id = `${aProductos[producto]['id']}`;
			};
		};
		//Escuchador de evento para el botón de sumar que le asigna la funcion de agregar el producto
		btnSumar.addEventListener('click', agregarCarrito);
		//Otro escuchador para el mismo botón que permite actualizar el valor total de la compra y habilitar el boton de restar
		btnSumar.addEventListener('click', (e) => {
			//Se busca el elemento que contiene el precio total
			let total = d.querySelector('#totalCarrito > span');
			//En el momento que se hace click en el botón de agregar una unidad, se verifica si las cantidades (en el objeto) para dicho producto es mayor a 1 para poder habilitar el botón que permite quitar una unidad del carrito
			if (oCarrito.cantidades[id] > 1) {
				e.target.previousElementSibling.disabled = false;
				e.target.previousElementSibling.removeAttribute('style');
			}
			//Se actualizan las cantidades y subtotales
			actualizarModal();
			//Se actualiza el precio total de la compra
			total.innerHTML = `$ ${oCarrito.totalPrecio}`;
		});
		//Escuchador de evento para el botón de restar que le asigna la función de quitar el producto
		btnRestar.addEventListener('click', quitarCarrito);
		//Otro escuchador para el mismo botón que actualiza el total de la compra y deshabilita el boton si es necesario
		btnRestar.addEventListener('click', (e) => {
			//Se busca el elemento que contiene el precio total
			let total = d.querySelector('#totalCarrito > span');
			//Si al hacer click en el botón que quita una unidad, las cantidades para el producto es 1, se deshabilita el botón para que no se puedan seguir restando unidades
			if (oCarrito.cantidades[id] == 1){
				e.target.disabled = true;
				btnRestar.style.cssText = 'background-color: grey; cursor: default;'
			}
			//Se actualizan las cantidades y subtotales
			actualizarModal();
			//Se actualiza el precio total de la compra
			total.innerHTML = `$ ${oCarrito.totalPrecio}`;
		});
		//Appends
		pCantidad.append(sCantidad);
		pValor.append(sValor);
		div4.append(pCantidad, btnRestar, btnSumar, pValor, btnEliminar);
		div3.append(pProducto);
		div3.append(div4);
		//Condición que se tiene que cumplir para que se appendee el div que tiene la info del producto al modal para evitar productos con 0 unidades
		//ej: Si tengo un producto en el carrito se va a mostrar en el modal, pero al eliminar ese producto del carrito desde el modal, las cantidades para ese producto van a pasar a ser 0. La condición verifica si hay por lo menos 1 unidad del producto, y si es así, muestra el producto en el modal.
		if (oCarrito.cantidades[id] > 0){
			div2.append(div3);
		}
		//Escuchador de eventos para el botón que permite quitar completamente el producto del carrito
		btnEliminar.addEventListener('click', (e) => {
			//Obtengo el id del boton
			let id = parseInt(e.target.dataset.id);
			//Verificación para saber si existe el producto
			let indiceId = oCarrito.productosIds.indexOf(id);
			if (indiceId != -1) {
				//Verifico si llegó a cero
				if (oCarrito.cantidades[indiceId] > 0) {
					//Si existe, actualizo las cantidades totales
					oCarrito.totalCantidades = parseInt(oCarrito.totalCantidades) - parseInt(oCarrito.cantidades[indiceId]);
					//Actualizo el precio total de la compra, restandole el subtotal para ese producto
					oCarrito.totalPrecio = parseInt(oCarrito.totalPrecio) - parseInt(oCarrito.subtotal[indiceId]);
					//Se asigna con 0 el subtotal y las cantidades para ese producto
					oCarrito.subtotal[indiceId] = 0;
					oCarrito.cantidades[indiceId] = 0;
				}
			}
			//Se actualiza el carrito en el localStorage
			localStorage.oCarrito = JSON.stringify(oCarrito);
			//Se actualiza el carrito y la información del modal
			actualizarCarrito();
			actualizarModal();
			//Se actualiza el precio total en el modal
			sTotal.innerHTML = `$ ${oCarrito.totalPrecio}`;
			//Se busca al div que contiene toda la info del producto y se lo borra
			e.target.parentNode.parentNode.remove();
			//Se verifica si hay algún producto en el carrito
			if (oCarrito.totalCantidades < 1){
				//Se appendea el mensaje que notifica que no hay productos en el carrito
				div2.append(msjVacio);
				//Se elimina el carrito del localStorage
				localStorage.removeItem('oCarrito');
				//Se deshabilita el checkout
				btnCheckout.disabled = true;
				btnCheckout.style.cssText = 'background-color: grey; cursor: default; border: 1px solid grey;'
			} else {
				//Se habilita el checkout
				btnCheckout.disabled = false;
				btnCheckout.removeAttribute('style');
			}
		});
	};
	//Elemento que va a contener el precio total de la compra
	let pTotal = d.createElement('p');
	pTotal.id = 'totalCarrito';
	pTotal.innerHTML = 'Total ';
	let sTotal = d.createElement('span');
	sTotal.innerHTML = `$ ${oCarrito.totalPrecio}`;
	pTotal.append(sTotal);
	//div que contiene a los botones para vaciar el carrito y para ir al checkout
	let div5 = d.createElement('div');
	div5.id = 'btnsCarrito';
	//Botón para vaciar carrito
	let btnVaciar = d.createElement('button');
	btnVaciar.id = 'vaciar';
	btnVaciar.innerHTML = 'Vaciar carrito';
	//Escuchador de evento para borrar todos los productos del modal y del carrito
	btnVaciar.addEventListener('click', (e) => {
		//Se obtienen todos los divs que tienen la info de cada producto
		let divsProductos = d.querySelectorAll('.producto');
		//Se borra cada uno
		for (let producto of divsProductos){
			producto.remove();
		}
		//El precio total de la compra en el modal se muestra como $0
		sTotal.innerHTML = '$ 0';
		//Se appendea el mensaje que notifica que no hay productos en el carrito
		div2.append(msjVacio);
		//Se limpia el carrito
		oCarrito = {
			productosIds: [],
			cantidades: [],
			subtotal: [],
			totalPrecio: 0,
			totalCantidades: 0,
		};
		//Se elimina el carrito del localStorage
		localStorage.removeItem('oCarrito');
		//Se actualiza la info del carrito
		actualizarCarrito();
	});
	//Botón para el checkout
	let btnCheckout = d.createElement('button');
	btnCheckout.id = 'checkout';
	btnCheckout.innerHTML = 'Checkout';
	//Verificación inicial para saber si hay productos o no en el carrito
	if (oCarrito.totalCantidades == 0){
		//Si no hay productos, se deshabilita el botón para ir al checkout
		btnCheckout.disabled = true;
		btnCheckout.style.cssText = 'background-color: grey; cursor: default; border: 1px solid grey;'
	} else {
		//Si hay al menos un producto, se habilita el paso al checkout
		btnCheckout.disabled = false;
		btnCheckout.removeAttribute('style');
	}
	//Append de los botones a su div
	div5.append(btnVaciar, btnCheckout);
	//Append de toda la info del modal a un div contenedor
	div1.append(pTotal, div5);
	//Append del modal al body
	d.body.append(div);
});

//Modal checkout
//Escuchador de evento del botón "Ver carrito" para poder buscar los nuevos elementos una vez creados
btnCarrito.addEventListener('click', (e) => {
	//Obtengo el botón de checkout
	let btnCheckout = d.querySelector('#checkout');
	//Escuchador de evento para el botón de checkout
	btnCheckout.addEventListener('click', (e) => {
		//Obtengo el modal del detalle del carrito y se lo deja de mostrar cuando se esté mostrando el modal de checkout
		let modalCarrito = d.querySelector('#modalCarrito');
		modalCarrito.style.display = 'none';
		//Elementos modal checkout
		let div = d.createElement('div');
		div.id = 'modalCheckout';
		div.className = 'modal';
		let div1 = d.createElement('div');
		div1.className = 'containerForm';
		let a = d.createElement('a');
		a.id = 'carritoCerrar';
		a.href = 'javascript:void(0)';
		a.innerHTML = 'X';
		a.addEventListener('click', (e) => {
			d.querySelector('#modalCheckout').remove();
			//Si se cierra el modal de checkout, además de borrarlo, se vuelve a mostrar el modal del detalle del carrito
			modalCarrito.style.display = 'flex';
			return false;
		});
		//Creación del form
		let form = d.createElement('form');
		form.id = 'frm';
		let fieldset1 = d.createElement('fieldset');
		fieldset1.id = 'info';
		let legend1 = d.createElement('legend');
		legend1.innerHTML = 'Información del cliente';
		fieldset1.append(legend1);
		let fieldset2 = d.createElement('fieldset');
		fieldset2.id = 'pago';
		let legend2 = d.createElement('legend');
		legend2.innerHTML = 'Método de pago';
		fieldset2.append(legend2);
		//Creación input nombre
		let nombre = d.createElement('input');
		nombre.type = 'text';
		nombre.name = 'nombre';
		nombre.placeholder = 'Nombre';
		//Mensaje personalizado en el onblur
		nombre.addEventListener('blur', (e) => {
			if (e.target.value.length < 3) {
				e.target.setCustomValidity('Debe contener 3 caracteres como mínimo');
				e.target.style.border = '1px solid red';
			} else {
				e.target.setCustomValidity('');
				e.target.removeAttribute('style');
			}
		});
		nombre.required = true;
		//Creación input apellido
		let apellido = d.createElement('input');
		apellido.type = 'text';
		apellido.name = 'apellido';
		apellido.placeholder = 'Apellido';
		//Mensaje personalizado en el onblur
		apellido.addEventListener('blur', (e) => {
			if (e.target.value.length < 3) {
				e.target.setCustomValidity('Debe contener 3 caracteres como mínimo');
				e.target.style.border = '1px solid red';
			} else {
				e.target.setCustomValidity('');
				e.target.removeAttribute('style');
			}
		});
		apellido.required = true;
		//Creación input teléfono
		let telefono = d.createElement('input');
		telefono.type = 'text';
		telefono.name = 'telefono';
		telefono.placeholder = 'Teléfono';
		//Mensaje personalizado en el onblur y verificación de que sólo se ingresen números
		telefono.addEventListener('blur', (e) => {
			if (e.target.value.length == 0) {
				e.target.setCustomValidity('');
				e.target.removeAttribute('style');
			} else if ((e.target.value.length < 6) || (isNaN(e.target.value))) {
				e.target.setCustomValidity('Sólo se permiten números, con un mínimo de 6');
				e.target.style.border = '1px solid red';
			} else {
				e.target.setCustomValidity('');
				e.target.removeAttribute('style');
			}
		});
		//Creación input email
		let email = d.createElement('input');
		email.type = 'email';
		email.name = 'email';
		email.placeholder = 'Email';
		email.required = true;
		//Array paises para los select
		let paises = {
			Argentina: ['Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba', 'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta', 'San Juan', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego', 'Tucumán'],
			Chile: ['Arica', 'Parinacota', 'Iquique', 'El Tamarugal', 'Antofagasta', 'El Loa', 'Tocopilla', 'Chañaral', 'Copiapó', 'Huasco', 'Choapa', 'Elqui', 'Limarí', 'Isla de Pascua', 'Los Andes', 'Petorca', 'Quillota', 'San Antonio', 'San Felipe de Aconcagua', 'Valparaiso', 'Chacabuco', 'Cordillera', 'Maipo', 'Melipilla', 'Santiago', 'Talagante', 'Cachapoal', 'Cardenal Caro', 'Colchagua', 'Cauquenes', 'Curicó', 'Linares', 'Talca', 'Arauco', 'Bio Bío', 'Concepción', 'Ñuble', 'Cautín', 'Malleco', 'Valdivia', 'Ranco', 'Chiloé', 'Llanquihue', 'Osorno', 'Palena', 'Aisén', 'Capitán Prat', 'Coihaique', 'General Carrera', 'Antártica Chilena', 'Magallanes', 'Tierra del Fuego', 'Última Esperanza'],
			Uruguay: ['Artigas', 'Canelones', 'Cerro Largo', 'Colonia', 'Durazno', 'Flores', 'Florida', 'Lavalleja', 'Maldonado', 'Montevideo', 'Paysandú', 'Río Negro', 'Rivera', 'Rocha', 'Salto', 'San José', 'Soriano', 'Tacuarembó', 'Treinta y Tres'],
		};
		//Creación select de país y provincia
		let selPais = d.createElement('select');
		selPais.name = 'pais';
		let selProvincia = d.createElement('select');
		selProvincia.name = 'provincia';
		//Creación de elemento para las opciones
		let option;
		for (let pais in paises){
			option = d.createElement('option');
			option.value = pais;
			option.innerHTML = pais;
			selPais.append(option);
		}
		//Función que carga las provincias
		const Prov = (pais) => {
			selProvincia.innerHTML = '';
			for (let provincia of paises[pais]){
				option = d.createElement('option');
				option.value = provincia;
				option.innerHTML = provincia;
				selProvincia.append(option);
			}
		};
		//Carga de las primeras provincias
		Prov('Argentina');
		//Escuchador para el onchange y así cambiar las provincias que se muestran
		selPais.addEventListener('change', (e) => {
			Prov(e.target.value);
		});
		//Creación input dirección
		let direccion = d.createElement('input');
		direccion.type = 'text';
		direccion.name = 'direccion';
		direccion.placeholder = 'Dirección';
		//Mensaje personalizado en el onblur
		direccion.addEventListener('blur', (e) => {
			if (e.target.value.length < 3) {
				e.target.setCustomValidity('Debe contener 3 caracteres como mínimo');
				e.target.style.border = '1px solid red';
			} else {
				e.target.setCustomValidity('');
				e.target.removeAttribute('style');
			}
		});
		direccion.required = true;
		//Parte del formulario que solicita día de entrega
		let fFecha = d.createElement('fieldset');
		fFecha.id = 'dias';
		let lFecha = d.createElement('legend');
		lFecha.innerHTML = 'Elija día de entrega';
		fFecha.append(lFecha);
		//p que mostrará información sobre la elección de días
		let msjFecha = d.createElement('p');
		msjFecha.id = 'aviso'
		let label;
		let checkbox;
		//Array con los días
		let dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
		//Se crea un checkbox para cada día
		for (let dia of dias) {
			label = d.createElement('label');
			checkbox = d.createElement('input');
			checkbox.type = 'checkbox';
			checkbox.name = dia;
			checkbox.value = dia;
			label.innerHTML = dia;
			label.prepend(checkbox)
			fFecha.append(label);
		}
		fFecha.append(msjFecha);

		//Parte del formulario que solicita método de pago
		//Selector de método de pago
		let selPago = d.createElement('select');
		selPago.name = 'pago';
		//Array con los métodos de pago
		let metodosPago = ['Efectivo', 'Transferencia', 'Tarjeta de crédito', 'Tarjeta de débito']
		//Para cada uno se crea una opción
		for (let metodo of metodosPago){
			option = d.createElement('option');
			option.value = metodo;
			option.innerHTML = metodo;
			selPago.append(option);
		}
		fieldset2.append(selPago);
		//Elementos para los datos solicitados si se selecciona tarjeta
		let selTarjeta = d.createElement('select');
		selTarjeta.name = 'tarjeta'
		selTarjeta.id = 'tarjeta'
		//Array con los emisores de tarjetas
		let tarjetas = ['Visa', 'MasterCard', 'American Express']
		//Se crea una opción para cada una
		for (let tarjeta of tarjetas){
			option = d.createElement('option');
			option.value = tarjeta;
			option.innerHTML = tarjeta;
			selTarjeta.append(option);
		}
		//Input número de tarjeta
		let numTarjeta = d.createElement('input');
		numTarjeta.type = 'text';
		numTarjeta.name = 'numtarjeta';
		numTarjeta.placeholder = 'Número de la tarjeta';
		//Mensaje en onblur
		numTarjeta.addEventListener('blur', (e) => {
			if ((e.target.value.length < 15) || (isNaN(e.target.value))) {
				e.target.setCustomValidity('Sólo se permiten números, con un mínimo de 15');
				e.target.style.border = '1px solid red';
			} else {
				e.target.setCustomValidity('');
				e.target.removeAttribute('style');
			}
		});
		numTarjeta.required = true;
		//Input nombre en la tarjeta
		let nombTarjeta = d.createElement('input');
		nombTarjeta.type = 'text';
		nombTarjeta.name = 'nombtarjeta';
		nombTarjeta.placeholder = 'Nombre en la tarjeta';
		//Mensaje en onblur
		nombTarjeta.addEventListener('blur', (e) => {
			if (e.target.value.length < 3) {
				e.target.setCustomValidity('Debe contener 3 caracteres como mínimo');
				e.target.style.border = '1px solid red';
			} else {
				e.target.setCustomValidity('');
				e.target.removeAttribute('style');
			}
		});
		nombTarjeta.required = true;
		//Input vencimiento de la tarjeta
		let vencTarjeta = d.createElement('input');
		vencTarjeta.type = 'text';
		vencTarjeta.name = 'vencimiento';
		vencTarjeta.placeholder = 'Vencimiento';
		//Se agrega un '/' al ingresar 2 números
		vencTarjeta.addEventListener('input', (e) => {
			if (e.target.value.length == 2) {
				e.target.value += '/';
			}
		});
		//Mensaje en onblur
		vencTarjeta.addEventListener('blur', (e) => {
			if (e.target.value.length < 5) {
				e.target.setCustomValidity('Sólo se permiten números, con un mínimo de 4');
				e.target.style.border = '1px solid red';
			} else {
				e.target.setCustomValidity('');
				e.target.removeAttribute('style');
			}
		});
		vencTarjeta.required = true;
		//Input número de seguridad
		let numSeguridad = d.createElement('input');
		numSeguridad.type = 'text';
		numSeguridad.name = 'seguridad';
		numSeguridad.placeholder = 'Número de seguridad';
		//Mensaje en onblur
		numSeguridad.addEventListener('blur', (e) => {
			if ((e.target.value.length < 3) || (isNaN(e.target.value))) {
				e.target.setCustomValidity('Sólo se permiten números, con un mínimo de 3');
				e.target.style.border = '1px solid red';
			} else {
				e.target.setCustomValidity('');
				e.target.removeAttribute('style');
			}
		});
		numSeguridad.required = true;
		//Función para que se muestren los inputs requeridos en caso de que se seleccione tarjeta de crédito o débito como método de pago
		const Pago = (metodo) => {
			let selActivoTarjeta = d.querySelector('#tarjeta');
			let numActivo = d.querySelector('input[name=numtarjeta]');
			let nombActivo = d.querySelector('input[name=nombtarjeta]');
			let vencActivo = d.querySelector('input[name=vencimiento]');
			let segActivo = d.querySelector('input[name=seguridad]');
			//Si en el onchange se recibe tarjeta de crédito o tarjeta de débito como metodo, y el selector de tipo de tarjeta no existe, se appendea el selector de tarjetas y todos los inputs
			if ((metodo == 'Tarjeta de crédito' || metodo == 'Tarjeta de débito') && selActivoTarjeta == null){
				fieldset2.append(selTarjeta, numTarjeta, nombTarjeta, vencTarjeta, numSeguridad);
			}
			//Si en el onchange se recibe efectivo o transferencia como metodo, y si el selector de tarjetas existe, se borran todos los inputs y el selector de tarjetas
			if (metodo == 'Efectivo' || metodo == 'Transferencia') {
				if (selActivoTarjeta != null) {
					selActivoTarjeta.remove();
					numActivo.remove();
					nombActivo.remove();
					vencActivo.remove();
					segActivo.remove();
				}
			}
		};
		//Se inicializa la función pasandole como metodo efectivo
		Pago('Efectivo');
		//Escuchador para el onchange del selector de metodo de pago
		selPago.addEventListener('change', (e) => {
			Pago(e.target.value);
		});
		//Botón submit
		let submit = d.createElement('input');
		submit.type = 'submit';
		submit.value = 'Confirmar compra';
		//Appends
		fieldset1.append(nombre, apellido, telefono, email, selPais, selProvincia, direccion, fFecha);
		form.append(fieldset1, fieldset2, submit);
		div1.append(a, form);
		div.append(div1);
		//Append del modal al body
		d.body.append(div);
	});
});
//Otro escuchador de evento para el botón de checkout, para poder hacer la validación del formulario una vez que se haya armado 
btnCarrito.addEventListener('click', (e) => {
	let btnCheckout = d.querySelector('#checkout');

	btnCheckout.addEventListener('click', (e) => {
		//Busco los checkbox, el mensaje de aviso y el form
		let aCbx = d.querySelectorAll('input[type=checkbox]');
		let aviso = d.querySelector('#aviso');
		let form = d.querySelector('#frm');
		//Recorrido de los checkbox
		for (let cbx of aCbx){
			//Si existe lo guardo
			cbx.addEventListener('click', (e) => {
				let cont = 0;
				for (let cbx of aCbx) {
					if (cbx.checked) {
						cont++;
					}
				}
				if (cont > 1) {
					//Si hay más de un checkbox que esté checked, se muestra el mensaje de advertencia
					aviso.innerHTML = 'Debe seleccionar solo un día';
				} else {
					//Si no hay más de uno checked, no hay mensaje de advertencia
					aviso.innerHTML = '';
				}
			});
		}

		//Escuchador de evento onsubmit para el form y poder validarlo
		form.addEventListener('submit', (e) => {
			//Variable de control
			let control = true;
			//Checkboxs
			let cont = 0;
			for (let cbx of aCbx) {
				if (cbx.checked) {
					cont++;
				}
			}
			if (cont == 0) {
				//Si no hay ningun checkbox checked, no puede enviarse el formulario
				control = false;
			}
			if (aviso.innerHTML == 'Debe seleccionar solo un día'){
				//Si hay más de un checkbox checked, no puede enviarse el formulario
				control = false;
			}

			if (!control) {
				//Si la variable control está en false no se puede enviar el formulario
				if (aviso.innerHTML == 'Debe seleccionar solo un día') {
					e.preventDefault();
				} else {
					aviso.innerHTML = 'Debe seleccionar un día';
					e.preventDefault();
				}
			}

			//Se reinicia el carrito
			oCarrito = {
				productosIds: [],
				cantidades: [],
				subtotal: [],
				totalPrecio: 0,
				totalCantidades: 0,
			};
			//Se elimina el carrito del localStorage
			localStorage.removeItem('oCarrito');
			//Se actualiza el carrito
			actualizarCarrito();
		});
	});
});

//Modal detalles
//Obtenemos los buttons con clase ampliar una vez que fueron creados
let btnAmpliar = d.querySelectorAll('.ampliar');

//Recorrido de los botones para ampliar
for (let btn of btnAmpliar) {
	//Escuchador de evento para que cuando se haga click en el boton se abra la ventana modal
	btn.addEventListener('click', (e) => {
		let div = d.createElement('div');
		div.id = 'modalProducto';
		div.className = 'modal';
		let div1 = d.createElement('div');
		div1.id = 'detalles';
		//Elementos para la galería
		let div2 = d.createElement('div');
		div2.id = 'galeriaModal';
		let img1 = d.createElement('img');
		let img2 = d.createElement('img');
		let img3 = d.createElement('img');
		//Creación del elemento a con su escuchador de eventos para poder cerrar la ventana modal
		let a = d.createElement('a');
		a.id = 'cerrarDetalles';
		a.href = 'javascript:void(0)';
		a.innerHTML = 'X';
		a.addEventListener('click', (e) => {
			d.querySelector('#modalProducto').remove();
			return false;
		});
		//Creación de los elementos que va a contener la ventana modal. Buscando los elementos con movimiento entre nodos y usando cloneNode para obtener el mismo elemento que en la card del producto y (true) para que se muestre el mismo contenido. 
		let img = e.target.parentNode.previousElementSibling.cloneNode();
		let img0 = e.target.parentNode.previousElementSibling.cloneNode();
		let h3 = e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.cloneNode(true);
		let p = e.target.previousElementSibling.previousElementSibling.cloneNode(true);
		let button = e.target.previousElementSibling.cloneNode(true);
		button.addEventListener('click', agregarCarrito);
		//Un nuevo elemento 'p' que va a contener la descripción
		let desc = d.createElement('p');
		//Variable para ir almacenando la descripción
		let contDesc;
		//Recorrido del array de productos, con una condición que compara el contenido del índice 'nombre' de cada objeto con el contenido del h3 que se encuentra como hermano del boton seleccionado. Si coincide, la variable contDesc pasa a valer el contenido del índice 'descripción' del objeto.
		for (let producto in aProductos){
			if (aProductos[producto]['nombre'] == h3.innerHTML){
				contDesc = aProductos[producto]['descripcion2'];
			}
		};
		//La descripción correspondiente del producto se define como el innerHTML de desc
		desc.innerHTML = `${contDesc}`
		//Búsqueda de las imágenes para la galería según el h3 (nombre del producto)
		for (let producto in aProductos){
			if (aProductos[producto]['nombre'] == h3.innerHTML){
				img1.src = `assets/${aProductos[producto]['nombre']}-1.jpg`;
				img1.alt = `${aProductos[producto]['nombre']}`;
				img2.src = `assets/${aProductos[producto]['nombre']}-2.jpg`;
				img2.alt = `${aProductos[producto]['nombre']}`;
				img3.src = `assets/${aProductos[producto]['nombre']}-3.jpg`;
				img3.alt = `${aProductos[producto]['nombre']}`;
			}
		}
		//Escuchadores de evento para cada imagen miniatura, para que se muestre como la imagen principal
		img0.addEventListener('click', (e) => {
			img.src = e.target.src;
		});
		img1.addEventListener('click', (e) => {
			img.src = e.target.src;
		});
		img2.addEventListener('click', (e) => {
			img.src = e.target.src;
		});
		img3.addEventListener('click', (e) => {
			img.src = e.target.src;
		});
		div2.append(img0, img1, img2, img3);
		//Append de los elementos al div y del div al body
		div1.append(a, img, div2, h3, desc, p, button);
		div.append(div1);
		d.body.append(div);
	});
}

//Escuchador de evento para poder cerrar el modal con escape
window.addEventListener('keydown', (e) => {
	if (e.key == 'Escape' && d.querySelector('#modalProducto')) {
		d.querySelector('#modalProducto').remove();
	}
});
//Escuchador de evento para poder cerrar el modal del carrito con escape
window.addEventListener('keydown', (e) => {
	if (e.key == 'Escape' && d.querySelector('#modalCarrito') && !(d.querySelector('#modalCheckout'))) {
		d.querySelector('#modalCarrito').remove();
	}
});
//Escuchador de evento para poder cerrar el modal del checkout con escape
window.addEventListener('keydown', (e) => {
	if (e.key == 'Escape' && d.querySelector('#modalCheckout')) {
		d.querySelector('#modalCheckout').remove();
		d.querySelector('#modalCarrito').style.display = 'flex';
	}
});