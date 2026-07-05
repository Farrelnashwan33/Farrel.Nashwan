export function generateDescription(repoName: string, existingDescription: string | null): string {
	if (existingDescription && existingDescription.trim() !== '') {
		return existingDescription;
	}

	// Pre-defined descriptions for known projects based on user prompt
	const nameLower = repoName.toLowerCase();
	
	if (nameLower.includes('creative quran v2') || nameLower === 'creative-quran-v2') {
		return "Versi terbaru aplikasi Creative Quran dengan arsitektur yang lebih modern, performa tinggi, desain UI baru, serta siap dipublikasikan ke Google Play Store.";
	}
	
	if (nameLower.includes('creative quran') || nameLower.includes('quran')) {
		return "Aplikasi Al-Qur'an digital modern berbasis Flutter dengan tampilan elegan, pencarian surat, audio murottal, bookmark, dan pengalaman membaca yang nyaman.";
	}
	
	if (nameLower.includes('nova hr') || nameLower.includes('novahr')) {
		return "Sistem Human Resource Management modern yang memiliki fitur absensi, payroll, pengajuan cuti, employee management, dashboard HR, serta monitoring data karyawan.";
	}

	// Generic professional description generator for others
	const cleanName = repoName.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
	return `Proyek pengembangan ${cleanName} yang dibangun menggunakan praktik clean code dan teknologi modern untuk memecahkan masalah spesifik secara efisien.`;
}

export function generateThumbnail(repoName: string): string {
	// Generate a deterministic placeholder image based on the repo name using UI Avatars
	const encodedName = encodeURIComponent(repoName.replace(/[-_]/g, ' '));
	return `https://ui-avatars.com/api/?name=${encodedName}&background=111111&color=0070f3&size=512&font-size=0.33&bold=true`;
}

export function formatDate(dateString: string): string {
	const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
	return new Date(dateString).toLocaleDateString('id-ID', options);
}
