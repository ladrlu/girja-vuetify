<template>
  <div class="pozadi">


    
        <router-link to="/createworkout" class="popisakce"><div class="obdelnik">Vytvořit sestavu</div></router-link>
    

    <router-view/>

    

      

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>


.obdelnik {
    border-radius: 5px;
    margin: 3rem;
    text-align: center;
    padding: 2rem; 
    height: 300px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 50px;
    background-color: #2196f3;
    color: white;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);   

}


a {
    text-decoration: none;
    font-weight: bold;
    font-size: 50px;
    color: black;
}







</style>



