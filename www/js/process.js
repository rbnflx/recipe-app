let process = {
	menu:function(){
		let content = 
		<div><center><h1>Lutong Pinoy Recipe</h1><h2>Pinoy Foods</h2>
			<div><a href='#' class="button button-big button-fill button-raised color-green" onClick={process.Appetizer}>Appetizer</a></div>
			<div><a href='#' class="button button-big button-fill button-raised color-teal" onClick={process.Seafood}>Seafood</a></div>
			<div><a href='#' class="button button-big button-fill button-raised color-green" onClick={process.Dessert}>Dessert</a></div>
			<div><a href='#' class="button button-big button-fill button-raised color-teal" onClick={process.Fried}>Fried</a></div>
			<div><a href='#' class="button button-big button-fill button-raised color-green" onClick={process.Vegetable}>Vegetable</a></div>		
		</center></div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	Appetizer:function(){
		let content =
		<div class="views">
            <div class="view view-main">
                <div class="pages">
					<div class="page-content">
            
				<a href='#' class="button button-big button-fill button-raised color-green" onClick={process.menu}>HOME</a>
			
				<center><h3>List of Recipes</h3><br/></center>
				
				<center>
				<div class="col-auto tablet-auto"><img src="img/CornedBeef.jpg"/></div>
				</center>
				<div><p>Corned Beef Guisado Recipe<br/><br/></p></div>
				
				<p><center><img src="img/CornedBeefIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/AdoboSteak.jpg"/></div>
				</center>
				<div><p>Adobo Steak Recipe<br/><br/></p></div>
				
				<p><center><img src="img/AdoboSteakIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/Afritada.jpg"/></div>
				</center>
				<div><p>Easy Pork Afritada Recipe<br/><br/></p></div>
				
				<p><center><img src="img/AfritadaIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/BasicPorkAdobo.jpg"/></div>
				</center>
				<div><p>Basic Pork Adobo Recipe<br/><br/></p></div>
				
				<p><center><img src="img/BasicPorkAdoboIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/BatangasBulalo.jpg"/></div>
				</center>
				<div><p>Batangas Bulalo Recipe<br/><br/></p></div>
				
				<p><center><img src="img/BatangasBulaloIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/BeefBicolExpress.jpg"/></div>
				</center>
				<div><p>Beef Bicol Express Recipe<br/><br/></p></div>
				
				<p><center><img src="img/BeefBicolExpressIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/BeefCurry.jpg"/></div>
				</center>
				<div><p>Beef Curry Recipe<br/><br/></p></div>
				
				<p><center><img src="img/BeefCurryIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/BeefKaldereta.jpg"/></div>
				</center>
				<div><p>Beef Kaldereta Recipe<br/><br/></p></div>
				
				<p><center><img src="img/BeefKalderetaIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/Binagoongan.jpg"/></div>
				</center>
				<div><p>Binagoongan Recipe<br/><br/></p></div>
				
				<p><center><img src="img/BinagoonganIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/ChickenFeet.jpg"/></div>
				</center>
				<div><p>Chicken Feet Recipe<br/><br/></p></div>
				
				<p><center><img src="img/ChickenFeetIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				
				<a href='#' class="button button-big button-fill button-raised color-green" onClick={process.menu}>BACK</a>
					</div>
				</div>
			</div>
		</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	Seafood:function(){
		let content = 
		<div class="views">
            <div class="view view-main">
                <div class="pages">
					<div class="page-content">

				<a href='#' class="button button-big button-fill button-raised color-teal" onClick={process.menu}>HOME</a>

				<center><h3>List of Recipes</h3><br/></center>
				
				<center>
				<div class="col-auto tablet-auto"><img src="img/Tahong.jpg"/></div>
				</center>
				<div><p>Baked Tahong Recipe<br/><br/></p></div>
				
				<p><center><img src="img/TahongIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/AdobongPusit.jpg"/></div>
				</center>
				<div><p>Adobong Pusit Recipe<br/><br/></p></div>
				
				<p><center><img src="img/AdobongPusitIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/SeafoodPasta.jpg"/></div>
				</center>
				<div><p>Creamy Seafood Pasta Recipe<br/><br/></p></div>
				
				<p><center><img src="img/SeafoodPastaIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/GinataangGalunggong.jpg"/></div>
				</center>
				<div><p>Ginataang Galunggong Recipe<br/><br/></p></div>
				
				<p><center><img src="img/GinataangGalunggongIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/BangusSisig.jpg"/></div>
				</center>
				<div><p>Bangus Sisig Recipe<br/><br/></p></div>
				
				<p><center><img src="img/BangusSisigIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/sisig.jpg"/></div>
				</center>
				<div><p>Sizzling Tuna Sisig Recipe<br/><br/></p></div>
				
				<p><center><img src="img/sisigIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/PaksiwnaIsda.jpg"/></div>
				</center>
				<div><p>Paksiw na Isda Recipe<br/><br/></p></div>
				
				<p><center><img src="img/PaksiwnaIsdaIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/SeafoodSinigang.jpg"/></div>
				</center>
				<div><p>Seafood Sinigang Recipe<br/><br/></p></div>
				
				<p><center><img src="img/SeafoodSinigangIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/GinisangSardinas.jpg"/></div>
				</center>
				<div><p>Ginisang Sardinas Recipe<br/><br/></p></div>
				
				<p><center><img src="img/GinisangSardinasIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/InihawnaBangus.jpg"/></div>
				</center>
				<div><p>Inihaw na Bangus Recipe<br/><br/></p></div>
				
				<p><center><img src="img/InihawnaBangusIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<a href='#' class="button button-big button-fill button-raised color-teal" onClick={process.menu}>BACK</a>
					</div>
				</div>
			</div>
		</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	Dessert:function(){
		let content = 
	<div class="views">
            <div class="view view-main">
                <div class="pages">
					<div class="page-content">

				<a href='#' class="button button-big button-fill button-raised color-green" onClick={process.menu}>HOME</a>
			<div>

				<center><h3>List of Recipes</h3><br/></center>
				
				<center>
				<div class="col-auto tablet-auto"><img src="img/BukoSalad.jpg"/></div>
				</center>
				<div><p>Buko Salad Recipe<br/><br/></p></div>
				
				<p><center><img src="img/BukoSaladIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/puto.jpg"/></div>
				</center>
				<div><p>Buttered Puto Recipe<br/><br/></p></div>
				
				<p><center><img src="img/putoIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/espasol.jpg"/></div>
				</center>
				<div><p>Espasol Recipe<br/><br/></p></div>
				
				<p><center><img src="img/espasolIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/ChocolateFudgeBrowniesRecipe.jpg"/></div>
				</center>
				<div><p>Chocolate Fudge Brownies Recipe<br/><br/></p></div>
				
				<p><center><img src="img/ChocolateFudgeBrowniesRecipeIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/kutsinta.jpg"/></div>
				</center>
				<div><p>Kutsinta Recipe<br/><br/></p></div>
				
				<p><center><img src="img/kutsintaIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/LecheFlan.jpg"/></div>
				</center>
				<div><p>Leche Flan Recipe<br/><br/></p></div>
				
				<p><center><img src="img/LecheFlanIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/Yema.jpg"/></div>
				</center>
				<div><p>Yema Recipe<br/><br/></p></div>
				
				<p><center><img src="img/YemaIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/KamoteCue.jpg"/></div>
				</center>
				<div><p>Kamote Cue Recipe<br/><br/></p></div>
				
				<p><center><img src="img/KamoteCueIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/MinatamisnaSaging.jpg"/></div>
				</center>
				<div><p>Minatamis na Saging Recipe<br/><br/></p></div>
				
				<p><center><img src="img/MinatamisnaSagingIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/UbeHalaya.jpg"/></div>
				</center>
				<div><p>Ube Halaya Recipe<br/><br/></p></div>
				
				<p><center><img src="img/UbeHalayaIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<a href='#' class="button button-big button-fill button-raised color-green" onClick={process.menu}>BACK</a>

						</div>
					</div>
				</div>
			</div>
		</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	Fried:function(){
		let content =
		<div class="views">
            <div class="view view-main">
                <div class="pages">
					<div class="page-content">
            
				<a href='#' class="button button-big button-fill button-raised color-teal" onClick={process.menu}>HOME</a>
			
				<center><h3>List of Recipes</h3><br/></center>
				
				<center>
				<div class="col-auto tablet-auto"><img src="img/buffalowings.jpg"/></div>
				</center>
				<div><p>Buffalo Chicken Wings Recipe<br/><br/></p></div>
				
				<p><center><img src="img/buffalowingsIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/calamares.jpg"/></div>
				</center>
				<div><p>Calamares Recipe<br/><br/></p></div>
				
				<p><center><img src="img/calamaresIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/ChicharonBulaklak.jpg"/></div>
				</center>
				<div><p>Chicharon Bulaklak Recipe<br/><br/></p></div>
				
				<p><center><img src="img/ChicharonBulaklakIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/dynamitelumpia.jpg"/></div>
				</center>
				<div><p>Dynamite Lumpia Recipe<br/><br/></p></div>
				
				<p><center><img src="img/dynamitelumpiaIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/Embutido.jpg"/></div>
				</center>
				<div><p>Embutido Recipe<br/><br/></p></div>
				
				<p><center><img src="img/ebutidoIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/Ham.jpg"/></div>
				</center>
				<div><p>Fried Ham and Cheese Roll Recipe<br/><br/></p></div>
				
				<p><center><img src="img/HamIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/Longganisa.jpg"/></div>
				</center>
				<div><p>Longganisa Recipe<br/><br/></p></div>
				
				<p><center><img src="img/LongganisaIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/Nuggets.jpg"/></div>
				</center>
				<div><p>Nuggets Recipe<br/><br/></p></div>
				
				<p><center><img src="img/NuggetsIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/PorkChop.jpg"/></div>
				</center>
				<div><p>Pork Chop Recipe<br/><br/></p></div>
				
				<p><center><img src="img/PorkChopIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/Tilapia.jpg"/></div>
				</center>
				<div><p>Crispy Tilapia Sticks Recipe<br/><br/></p></div>
				
				<p><center><img src="img/TilapiaIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<a href='#' class="button button-big button-fill button-raised color-teal" onClick={process.menu}>BACK</a>
				
				
					</div>
				</div>
			</div>
		</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	Vegetable:function(){
		let content =
		<div class="views">
            <div class="view view-main">
                <div class="pages">
					<div class="page-content">
            
				<a href='#' class="button button-big button-fill button-raised color-green" onClick={process.menu}>HOME</a>
			
				<center><h3>List of Recipes</h3><br/></center>
				
				<center>
				<div class="col-auto tablet-auto"><img src="img/ChopsueywithQuailEggs.jpg"/></div>
				</center>
				<div><p>Chopsuey with Quail Eggs Recipe<br/><br/></p></div>
				
				<p><center><img src="img/ChopsueywithQuailEggsIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/Dinengdeng.jpg"/></div>
				</center>
				<div><p>Dinengdeng Recipe<br/><br/></p></div>
				
				<p><center><img src="img/DinengdengIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/GinataangSitawatKalabasawithCrabs.jpg"/></div>
				</center>
				<div><p>Ginataang Sitaw at Kalabasa with Crabs Recipe<br/><br/></p></div>
				
				<p><center><img src="img/GinataangSitawatKalabasawithCrabsIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/ginisangampalaya.jpg"/></div>
				</center>
				<div><p>Ginisang Ampalaya Recipe<br/><br/></p></div>
				
				<p><center><img src="img/ginisangampalayaIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/ginisanggulayrecipe.jpg"/></div>
				</center>
				<div><p>Ginisang Gulay Recipe<br/><br/></p></div>
				
				<p><center><img src="img/ginisanggulayrecipeIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/GinisangMonngowithDilisRecipe.jpg"/></div>
				</center>
				<div><p>Ginisang Monngo with Dilis Recipe<br/><br/></p></div>
				
				<p><center><img src="img/GinisangMonngowithDilisRecipeIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/AdobongKangkong.jpg"/></div>
				</center>
				<div><p>Adobong Kangkong Recipe<br/><br/></p></div>
				
				<p><center><img src="img/AdobongKangkongIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/BasicTortangTalong.jpg"/></div>
				</center>
				<div><p>Basic Tortang Talong Recipe<br/><br/></p></div>
				
				<p><center><img src="img/BasicTortangTalongIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/AnghangSarapLaingwithShrimp.jpg"/></div>
				</center>
				<div><p>Anghang Sarap Laing with Shrimp Recipe<br/><br/></p></div>
				
				<p><center><img src="img/AnghangSarapLaingwithShrimpIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/Binatog.jpg"/></div>
				</center>
				<div><p>Binatog Recipe<br/><br/></p></div>
				
				<p><center><img src="img/BinatogIng.png"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<a href='#' class="button button-big button-fill button-raised color-green" onClick={process.menu}>BACK</a>

				
				
					</div>
				</div>
			</div>
		</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},

		loading:function(){
		let content = <div>
					Loading...
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
	}
}

process.loading();
setTimeout(function(){
	process.menu();
},1);