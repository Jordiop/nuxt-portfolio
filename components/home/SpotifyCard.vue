<template>
    <div class="grid w-full grid-cols-2 grid-rows-1 bg-white">
        <img :src="image" class="h-full col-span-1 row-span-1 overflow-hidden saturate-50 rounded-3xl filter blur-xs contrast-10 sepia-10" />
        <div class="flex flex-col justify-between w-full col-span-1 row-span-1 ml-2 text-xs font-bold text-black items-left">
            <span class="text-xs font-bold text-left text-black">{{ nowOrLast }}</span>
            <span class="w-full mt-2 text-xl text-left bg-opacity-20 rounded-b-3xl backdrop-blur-sm backdrop-opacity-30">{{ currentTrackStr }}</span>
        </div>
    </div>
</template>

<script>
import { getNowPlaying } from '@/services/spotify'
export default {
    data() {
        return { currentTrackStr: 'Nothing playing right now.', image: '', nowOrLast: '' }
    },
    watch: {
        '$route.path'() { this.currentTrack() }
    },
    beforeMount() { this.currentTrack() },
    methods: {
        async currentTrack() {
            try {
                const response = await getNowPlaying()
                if (response.status === 200) {
                    const { item, is_playing: np } = await response.json()
                    np ? this.nowOrLast = 'Now playing: ' : this.nowOrLast = 'Last played:'
                    this.currentTrackStr = `${item.name} by ${item.artists.map(artist => artist.name).join(', ')}.`
                    this.image = item.album.images[0].url || ''
                }

            } catch (e) {
                this.currentTrackStr = 'Couldn\'t fetch data :('
            }
        }
    }
}
</script>