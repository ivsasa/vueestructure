<template>
    <nav class="main-menu">
        <router-link to="/">Home</router-link> 
        <router-link to="/about">About</router-link> 
        <router-link to="/gallery">Gallery</router-link> 
        <router-link to="/contact">Contact</router-link>
    </nav>
</template>

<style scoped lang="scss" >
    .main-menu{
        background-color: #adb303;
        .router-link-exact-active{
            background-color: rgb(236, 165, 33);
            text-shadow: 0 1px 0 rgba(246, 152, 30, 0.916);

        }
        a{
            display: block;
            text-decoration: none;
            padding: .5em;
            color: rgb(255, 254, 254);
            &:hover{
                    background-color: #03b32c;
                    border-color: #217f0a;
                }
        }
        @media (min-width: 600px){
            &.main-menu{
                display:flex ;
                background-color: #adb303;
                a{
                   width: 25%;
                   text-align: center;
                }

            }
        }
    }




</style>