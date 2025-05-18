<script setup>
import { ref, onMounted } from "vue";
import { database } from "@/firebase";
import { ref as dbRef, get, child, set, push } from "firebase/database";
import moment from "moment";

const dialog = ref(false);
const messages = ref([]);
const formData = ref(null);
const form = ref({
  nama: null,
  pesan: null,
  kehadiran: null,
  created_at: moment().format("LLL"),
});

const fetchData = async () => {
  const db = dbRef(database);
  try {
    const snapshot = await get(child(db, "project/test"));

    if (snapshot.exists()) {
      messages.value = snapshot.val();
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

const submit = async () => {
  const { valid } = await formData.value.validate();

  if (valid) {
    const db = dbRef(database, "project/test/pesan/");
    try {
      await push(db, form.value);
      alert("Pesan berhasil dikirimkan!");
      dialog.value = false;
      form.value = {
        nama: null,
        kehadiran: null,
        pesan: null,
      };
      fetchData();
    } catch (error) {
      console.error("Gagal mengirim:", error);
    }
  }
};

onMounted(() => {
  fetchData();
});
</script>
<template>
  <v-container class="relative p-0">
    <v-dialog v-model="dialog" width="auto">
      <v-card max-width="400" prepend-icon="mdi-update" title="Kirim Pesan">
        <v-card-text>
          <v-form fast-fail @submit.prevent="submit" ref="formData">
            <v-text-field
              v-model="form.nama"
              density="compact"
              label="Nama Anda"
              placeholder="Masukan nama anda"
              variant="outlined"
              :rules="[(value) => !!value || 'Anda wajib memasukan nama.']"
              class="mb-3"
            />
            <v-textarea
              v-model="form.pesan"
              density="compact"
              label="Pesan"
              placeholder="Masukan pesan anda"
              variant="outlined"
              :rules="[(value) => !!value || 'Anda wajib memberikan pesan.']"
              class="mb-3"
            />
            <v-radio-group
              inline
              v-model="form.kehadiran"
              :rules="[
                (value) => !!value || 'Anda wajib menginformasikan kehadiran.',
              ]"
              class="mb-3"
            >
              <v-radio label="Hadir" value="Hadir"></v-radio>
              <v-radio
                label="Belum Bisa Hadir"
                value="Belum Bisa Hadir"
              ></v-radio>
              <v-radio label="Belum Tahu" value="Belum Tahu"></v-radio>
            </v-radio-group>
            <div class="text-center mb-3">
              <v-btn type="submit" prepend-icon="mdi-send" color="info"
                >Kirim Pesan</v-btn
              >
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
    <div class="bg-gray-700/80 p-5 animate__animated animate__fadeInUp">
      <div class="h-full overflow-hidden py-10">
        <h3
          class="text-2xl text-white text-center mb-3 animate__animated animate__zoomIn animate__delay-1s"
        >
          Kirim Ucapan
        </h3>
        <p class="text-center">
          Sapa dan kirim ucapan beserta doa yang terbaik untuk mereka yang
          berbahagia.
        </p>
        <div class="flex justify-center">
          <v-btn
            prepend-icon="mdi-send"
            class="mb-3 mt-3 animate__animated animate__zoomIn animate__delay-3s"
            @click="dialog = true"
            color="light"
            size="small"
            rounded="0"
          >
            Kirim Pesan
          </v-btn>
        </div>
        <div
          class="h-[300px] rounded-lg shadow-lg overflow-auto pb-[150px] animate__animated animate__zoomIn animate__delay-4s"
        >
          <div
            class="bg-white/10 rounded px-2 py-4 mb-2 shadow"
            v-for="(item, index) in messages.pesan"
            :key="item"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="mb-0 text-white flex items-center">
                  {{ item.nama }}
                  <v-icon
                    icon="mdi-check-circle"
                    color="#44c930"
                    class="ms-2"
                    v-if="item.kehadiran == 'Hadir'"
                  />
                  <v-icon
                    icon="mdi-close-circle"
                    color="error"
                    class="ms-2"
                    v-else-if="item.kehadiran == 'Belum Bisa Hadir'"
                  />
                  <v-icon
                    icon="mdi-minus-circle"
                    color="#000"
                    class="ms-2"
                    v-else
                  />
                </p>
                <small class="text-gray-200">{{ item.created_at }}</small>
              </div>
            </div>
            <p class="border-t-2 pt-2 mt-2">
              {{ item.pesan }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>
