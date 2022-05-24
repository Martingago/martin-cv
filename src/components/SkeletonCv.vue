
<template>
    <!-- head -->
    <div class="cv-main-section">
        <section class="personal-info">
            <div class="personal-description skeleton">
                <h2 class="skeleton-tittle-1"></h2>
                <h3 class="skeleton-subtittle"></h3>

                <div>
                    <p class="skeleton-text"></p>
                    <p class="skeleton-text"></p>
                    <p class="skeleton-text"></p>
                    <p class="skeleton-text"></p>
                    <p class="skeleton-text"></p>
                    <p class="skeleton-text"></p>

                </div>

                <div class="languages">
                    <div class="skeleton-square"></div>
                    <div class="skeleton-square"></div>
                    <div class="skeleton-square"></div>
                    <div class="skeleton-square"></div>
                    <div class="skeleton-square"></div>
                    <div class="skeleton-square"></div>

                </div>
            </div>
            <div class="profile-img">
                <div class="skeleton-img"></div>
            </div>
            <div class="contact-info skeleton">
                <h3 class="skeleton-subtittle"></h3>
                <p class="skeleton-text"></p>

            </div>
        </section>

        <!-- content -->

        <section class="experience">
            <h2 class="skeleton-tittle"></h2>

            <div class="experience-description">
                <div class="description-data skeleton">
                    <h4 class="skeleton-subtittle"></h4>
                    <p class="skeleton-text"></p>
                    <p class="skeleton-text"></p>
                    <p class="skeleton-text"></p>
                    <p class="skeleton-text"></p>
                    <p class="skeleton-text"></p>
                    <p class="skeleton-text"></p>
                </div>
                <div class="description-responsabilities skeleton">
                    <span></span>
                    <div>
                        <p class="skeleton-text"></p>
                        <p class="skeleton-text"></p>
                        <p class="skeleton-text"></p>
                        <p class="skeleton-text"></p>
                        <p class="skeleton-text"></p>
                        <p class="skeleton-text"></p>
                    </div>
                </div>
            </div>

            <div class="experience-description">
                <div class="description-data skeleton">
                    <h4 class="skeleton-subtittle"></h4>
                    <p class="skeleton-text"></p>
                    <p class="skeleton-text"></p>
                    <p class="skeleton-text"></p>
                    <p class="skeleton-text"></p>
                </div>
                <div class="description-responsabilities skeleton">
                    <span></span>
                    <div>
                        <p class="skeleton-text"></p>
                        <p class="skeleton-text"></p>
                    </div>
                    <span></span>
                    <div>
                        <p class="skeleton-text"></p>
                    </div>
                    <span></span>
                    <div>
                        <p class="skeleton-text"></p>
                        <p class="skeleton-text"></p>
                        <p class="skeleton-text"></p>
                    </div>
                </div>
            </div>

            <div class="experience-description">
                <div class="description-data skeleton">
                    <h4 class="skeleton-subtittle"></h4>
                    <p class="skeleton-text"></p>
                    <p class="skeleton-text"></p>
                    <p class="skeleton-text"></p>
                    <p class="skeleton-text"></p>
                    <p class="skeleton-text"></p>
                </div>
                <div class="description-responsabilities skeleton">
                    <span></span>
                    <div>
                        <p class="skeleton-text"></p>
                        <p class="skeleton-text"></p>
                    </div>
                    <span></span>
                    <div>
                        <p class="skeleton-text"></p>
                    </div>
                    <span></span>
                    <div>
                        <p class="skeleton-text"></p>
                        <p class="skeleton-text"></p>
                    </div>
                </div>
            </div>
        </section>

        <!-- botom -->
        <section class="formacion">
            <h2 class="skeleton-tittle"></h2>
            <div class="experience-description skeleton">
                <div class="description-data">
                    <h4 class="skeleton-subtittle"></h4>
                    <p class="skeleton-text"></p>
                    <p class="skeleton-text"></p>
                    <p class="skeleton-text"></p>
                </div>
            </div>
            <div class="experience-description skeleton">
                <div class="description-data">
                    <h4 class="skeleton-subtittle"></h4>
                    <h4 class="skeleton-subtittle"></h4>
                    <p class="skeleton-text"></p>
                    <p class="skeleton-text"></p>
                </div>
            </div>

            <div class="experience-description skeleton">
                <div class="description-data">
                    <h4 class="skeleton-subtittle"></h4>
                    <h4 class="skeleton-subtittle"></h4>
                    <p class="skeleton-text"></p>
                    <p class="skeleton-text"></p>
                </div>
            </div>
        </section>

    </div>

</template>

<script setup>

</script>


<style scoped>


.personal-info,
.experience {
    margin-bottom: 1.4rem;
    gap: 1rem;
}

.formacion {
    gap: 1rem;
}

.contact-info {
    width: 100%;
}

/* Elementos Skeleton */
.skeleton {
    padding: .5rem;
    border-radius: 5px;
    animation: skeleton-background-loading 1s linear infinite alternate;
}

.skeleton-img {
    width: 100%;
    height: 250px;
    margin-bottom: 1rem;
    animation: skeleton-background-loading 1s linear infinite alternate;
    border-radius: 5px;
}

.skeleton-square {
    width: 40px;
    height: 40px;
    margin: .2rem;
    border-radius: 5px;
    background-color: white;
}

.skeleton-tittle {
    width: 35%;
    height: 1.75rem;
    margin-bottom: .75rem;
    border-radius: .25rem;
    background-color: white;
}

.skeleton-tittle-1 {
    width: 85%;
    height: 1.9rem;
    margin-bottom: .75rem;
    border-radius: .25rem;
    background-color: white;
}

.skeleton-subtittle {
    width: 70%;
    height: 1rem;
    margin-bottom: .5rem;
    border-radius: .25rem;
    background-color: white;
}

.skeleton-text {
    width: 100%;
    height: .7rem;
    border-radius: .25rem;
    margin-bottom: .3rem;
    background-color: white;
}

.skeleton-text:last-child {
    width: 80%;
}
@keyframes skeleton-background-loading {
    0% {
        background-color: hsl(200, 20%, 70%);
    }

    100% {
        background-color: hsl(200, 20%, 85%);
    }
}
</style>
