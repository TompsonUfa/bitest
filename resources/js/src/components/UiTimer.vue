<template>
    <div class="timer">
        {{timeLeft}}
    </div>
</template>

<script>
    export default {
        name: "ui-timer",
        data(){
            return {
                timeLimitInMinutes: 1, // Установите лимит времени в минутах
                totalTimeInSeconds: 0,
                timerInterval: null,
                timeLeft: "01:00",
            }
        },
        methods: {
            updateTimer(){
                const minutes = Math.floor(this.totalTimeInSeconds / 60);
                const seconds = this.totalTimeInSeconds % 60;
                const displayMinutes = String(minutes).padStart(2, "0");
                const displaySeconds = String(seconds).padStart(2, "0");
                this.timeLeft = `${displayMinutes}:${displaySeconds}`;
                if (this.totalTimeInSeconds > 0) {
                    this.totalTimeInSeconds--;
                } else {
                    clearInterval(this.timerInterval);
                    this.timeLeft = "End";
                }
            }
        },
        mounted() {
            this.totalTimeInSeconds = this.timeLimitInMinutes * 60;
            this.timerInterval = setInterval(this.updateTimer, 1000);
        },
    }
</script>

<style scoped lang="scss">
    .timer {
        font-size: 20px;
        font-weight: 600;
        color: var(--main-color);
    }
</style>
