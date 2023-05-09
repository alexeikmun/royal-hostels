<template>
  <div class="modal" :class="{ active: showModal }">
    <div class="modal-container">
      <div>
        <button class="modal-close " @click="closeModal">×</button>
      </div>
      <div class="modal-header">
        <slot name="header"></slot>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div class="modal-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showModal: false
    };
  },
  mounted() {
    this.showModal = this.show;
  },
  watch: {
    show(newValue) {
      this.showModal = newValue;
    }
  },
  methods: {
    closeModal() {
      this.showModal = false;
      this.$emit('close');
    }
  }
};
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal.active {
  display: flex;
}

.modal-container {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 25%;
  height: max-content;
  max-width: 500px;
  max-height: 500px;
  overflow-y: auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.modal-header h2 {
  width: 100%;
  text-align: center;
  margin: 0;
}

.modal-close {
  font-size: 20px;
  background-color: White;
  border-radius: 100%;
  cursor: pointer;
}

.modal-body {
  margin-bottom: 20px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
