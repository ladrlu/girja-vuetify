<template>
  <div class="pozadi">


   

    <div class="obdelnik">
        <router-link to="/runWorkout" class="popisakce">Začít cvičit</router-link>
    </div>

    <div class="obdelnik">
        <router-link to="/runWorkout" class="popisakce">Vytvořit trénink</router-link>
    </div>

    

      

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>


.pozadi {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(63, 63, 63, 0.8) 100%, rgba(63, 63, 63, 0.8) 0%),url(../assets/background.jpg);
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    position: absolute;
}



.obdelnik {
    border: 1px solid black;
    border-radius: 5px;
    margin: 3rem;
    background-color:gainsboro;
    text-align: center;
    padding: 2rem;
    box-shadow: 3px 3px 3px 0.5px rgb(90, 90, 90);
    
}

.obdelnik:hover {
    background-color: #607D8B;
   
}

.obdelnik a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
    color: black;
}







</style>



