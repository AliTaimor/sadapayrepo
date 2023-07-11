import React from "react";
import BottomSheet from 'react-native-raw-bottom-sheet';


function Payments() {
  return <>Payments

<BottomSheet
        ref={bottomSheetRef}
        closeOnDragDown
        dragFromTopOnly
        animationType="slide"
        height={300}
        openDuration={250}
        closeDuration={250}
        closeOnPressMask
        customStyles={{
          wrapper: { backgroundColor: 'rgba(0,0,0,0.5)' },
          draggableIcon: { backgroundColor: '#000' },
          container: { borderTopLeftRadius: 10, borderTopRightRadius: 10 },
        }}
      >
        {/* Content of the bottom sheet */}
        <View style={styles.bottomSheetContent}>
          <Text>Bottom Sheet Content</Text>
        </View>
      </BottomSheet>

  </View>;
}

export default Payments;
