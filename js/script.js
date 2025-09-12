document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const birthDate = document.getElementById("date").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById("message-text").value.trim();

  if (!name || !birthDate || !gender || !message) {
    alert("Semua field wajib diisi!");
    return;
  }

  const formattedDate = new Date(birthDate).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const currentTime = new Date().toLocaleString('id-ID');
  
  
document.getElementById("output").innerHTML = `
  <div class="output-row">
    <span class="output-label">Current time</span>
    <span class="output-colon">:</span>
    <span>${currentTime}</span>
  </div>
  <div class="output-row">
    <span class="output-label">Nama</span>
    <span class="output-colon">:</span>
    <span>${name}</span>
  </div>
  <div class="output-row">
    <span class="output-label">Tanggal Lahir</span>
    <span class="output-colon">:</span>
    <span>${formattedDate}</span>
  </div>
  <div class="output-row">
    <span class="output-label">Jenis Kelamin</span>
    <span class="output-colon">:</span>
    <span>${gender === 'laki' ? 'Laki-laki' : 'Perempuan'}</span>
  </div>
  <div class="output-row">
    <span class="output-label">Pesan</span>
    <span class="output-colon">:</span>
    <span>${message}</span>
  </div>
`;

  this.reset();
});