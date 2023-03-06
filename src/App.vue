<template>
  <span>
    <InputText class="p-inputtext-lg" placeholder="Header" style="width: 100%;" id="inputtext" type="text"
      v-model="form[0].header" />
  </span>
  <Editor v-model="form[0].prensa[0].row1" editorStyle="height: 320px" />
  <Editor v-model="form[0].prensa[0].row2" editorStyle="height: 320px" />
  <span>
    <InputText class="p-inputtext-lg" placeholder="Header" style="width: 100%;" id="inputtext" type="text"
      v-model="form[0].compra[0].local" />
  </span>
  <span>
    <InputText class="p-inputtext-lg" placeholder="Header" style="width: 100%;" id="inputtext" type="text"
      v-model="form[0].compra[0].visitante" />
  </span>
  <span>
    <InputText class="p-inputtext-lg" placeholder="Header" style="width: 100%;" id="inputtext" type="text"
      v-model="form[0].compra[0].fecha" />
  </span>
  <span>
    <InputText class="p-inputtext-lg" placeholder="Header" style="width: 100%;" id="inputtext" type="text"
      v-model="form[0].compra[0].hora" />
  </span>
  <button @click="generateFile()">Generar</button>
  <div>{{ form }}</div>
</template>

<script>
export default {
  data () {
    return {
      archivo: null,
      value: '[{"header":"","prensa":[{"row1":"","row2":""}],"compra":[{"local":"","visitante":"","fecha":"","hora":""}]}]',
      form: [{ header: 'PRIP PU POPO PRI PRO', prensa: [{ row1: "AAAAAAAAAAAAAAAAA", row2: "BBBBBBBBBBBBBBB" }], compra: [{ local: "BOKE", visitante: "BENTRAL", fecha: "AYER", hora: "ALLA" }], }]
    };
  },
  async mounted () {
    // await fetch('/jsons/file.json')
    //   .then((response) => response.text())
    //   .then((text) => {
    //     console.log(text);
    //     this.archivo = JSON.parse(text)

    //   })
    //   .catch((error) => {
    //     console.error("Error fetching file:", error);
    //   });
  },
  methods: {
    generateFile () {
      console.log(this.form);
      // let fileContent = this.value.replace(/<\/?p[^>]*>/g, "");
      const plus = JSON.stringify(this.form)
      const fileName = "new-file.json";
      const blob = new Blob([plus], { type: "text/plain" });
      const link = document.createElement("a");
      link.download = fileName;
      link.href = URL.createObjectURL(blob);
      link.click();
      URL.revokeObjectURL(link.href);
    },
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
