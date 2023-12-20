# 项目概览

<ProjectCards class="cards" :projects="projects" />

<script setup lang="ts">
    import ProjectCards from "@/components/ProjectCards.vue"
    import FOHLogo from "@@/project/f-oh/images/logo.svg"
    import projects from './projects.ts'
</script>

<style lang="scss">
    .cards {
        margin-top: 16px;
    }
</style>
