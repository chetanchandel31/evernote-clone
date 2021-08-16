import { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase";

const useFirestore = collection => {
	const [documents, setDocuments] = useState(null);
	useEffect(() => {
		const unsub = firestore
			.collection(collection)
			.orderBy("createdAt", "asc")
			.onSnapshot(snap => {
				let documents = snap.docs.map(doc => ({ ...doc.data(), id: doc.id }));
				setDocuments(documents);
			});

		return () => unsub();
	}, [collection]);

	return [documents];
};

export default useFirestore;
