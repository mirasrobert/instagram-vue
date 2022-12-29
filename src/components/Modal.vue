<template>
    <div>
      <teleport to="body">
        <div v-if="isOpen" class="modal">
          <div class="p-16 rounded-md bg-white">
            <slot></slot>
            <button class="px-3 py-2 bg-blue-600 text-white" @click="$emit('close')">Close</button>
          </div>
        </div>
      </teleport>
    </div>
</template>

<script setup>
import {ref, defineEmits, defineProps} from "vue";
defineProps('isOpen')
defineEmits('close')
</script>