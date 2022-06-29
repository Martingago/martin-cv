<template>
    <div class="admin-menu-section">
            <ul class="var-buttons">
                <li class="user-info"> <img class="user-profile-image" src="@/assets/img/profile.png" alt="profile">
                    <p class="user-profile-name">{{store.getEmailUser}}</p>
                </li>
                <li class="user-logout">
                    <button class="logout" @click="desconectar">
                        <font-awesome-icon :icon="['fa', 'arrow-right-from-bracket']"></font-awesome-icon> Cerrar sesión
                    </button>
                </li>
            </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStoreUsers } from "@/store/users";
import { useRouter } from "vue-router";
const router = useRouter();

const store = useStoreUsers()
const desconectar =  () => {
  try {
    router.push({name:'admin-login'})
    store.logout();
  } catch (error) {
  }
};

const isActive = ref({})

</script>

<style scoped>
.admin-menu-section {
    top: 0;
    position: fixed;
    width: 100%;
    height: 44px;
    margin: auto;
    background: rgb(169, 95, 228);
    background: linear-gradient(90deg, rgba(169, 95, 228, 1) 0%, rgba(59, 202, 240, 1) 69%);
    z-index: 2;
}

/* Menu superior */

.admin-menu-section ul {
    width: fit-content;
    display: grid;
    margin-left: auto;
    grid-template-columns: repeat(3, auto);
    align-self: center;
    justify-content: flex-end;
    gap: 1rem;
    padding: .5rem 1rem;
}

.admin-menu-section .menu-btn {
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: white;
}

.admin-menu-section .menu-btn svg {
    font-size: 2rem;
}

.admin-menu-section .user-info {
    display: grid;
    height: 100%;
    grid-template-columns: auto auto;
    gap: .5rem;
    align-self: center;
    align-items: center;
}

.admin-menu-section .user-info .user-profile-image {
    width: 25px;
    border-radius: 50%;
}

.admin-menu-section .user-info .user-profile-email {
    font-size: 1.2rem;
    line-height: 1.2rem;
    height: fit-content;
}

.admin-menu-section .user-logout {
    display: flex;
    justify-content: center;
    align-items: center;
}

.admin-menu-section .logout {
    cursor: pointer;
    font-size: 1rem;
    line-height: 1rem;
    padding: .25rem .5rem;
}
</style>